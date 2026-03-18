import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { io } from "socket.io-client";
import {
  addMessage,
  setCurrentChatId,
  setMessages,
  addPreviousChat,
  toggleSidebar,
  closeSidebar,
  setPreviousChats,
  handleLogoutState,
  clearMessages,
} from "../store/chatSlice";

import "../styles/chat.css";
import "../styles/home.css";
import { ArrowUp, Equal, Plus } from "lucide-react";
import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

function Home() {
  const dispatch = useDispatch();

  const { messages, previousChats, isSidebarOpen, currentChatId, isLoggedIn } =
    useSelector((state) => state.chat);

  const [input, setInput] = useState("");
  const socketRef = useRef(null);
  const textareaRef = useRef(null);
  const bottomRef = useRef(null);

  // ---------- Helpers ----------
  const extractMessageContent = (content) => {
    if (typeof content === "string") return content;
    if (!content || typeof content !== "object") return "";

    // backend may send nested object
    return (
      content.directly ||
      content.text ||
      content.message ||
      content.response ||
      content.content ||
      JSON.stringify(content)
    );
  };

  const normalizeMessage = (msg, fallbackRole = "assistant") => {
    if (!msg) return null;

    const role =
      msg.role ||
      msg.sender ||
      msg.type ||
      (fallbackRole === "assistant" ? "assistant" : "user");

    const content = extractMessageContent(
      msg.content ?? msg.message ?? msg.text ?? msg.response,
    );

    if (!content.trim()) return null;

    return {
      role:
        role === "ai" || role === "bot"
          ? "assistant"
          : role === "human"
            ? "user"
            : role,
      content,
      createdAt: msg.createdAt || msg.timestamp || null,
    };
  };

  const normalizeMessages = (messagesArray = []) => {
    if (!Array.isArray(messagesArray)) return [];

    const normalized = messagesArray
      .map((msg) =>
        normalizeMessage(msg, msg?.role === "user" ? "user" : "assistant"),
      )
      .filter(Boolean);

    // If timestamps exist, sort oldest -> newest
    const hasTimestamps = normalized.every((msg) => msg.createdAt);
    if (hasTimestamps) {
      normalized.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );
    }

    return normalized;
  };

  // ---------- Auto scroll ----------
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ---------- Axios interceptor ----------
  useEffect(() => {
    const interceptorId = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          dispatch(handleLogoutState());
        }
        return Promise.reject(error);
      },
    );

    return () => {
      axios.interceptors.response.eject(interceptorId);
    };
  }, [dispatch]);

  // ---------- Fetch previous chats + socket setup ----------
  useEffect(() => {
    let isMounted = true;

    const fetchChats = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/chat`, {
          withCredentials: true,
        });

        if (!isMounted) return;

        const chats = Array.isArray(res.data.chats)
          ? [...res.data.chats].reverse()
          : [];
        dispatch(setPreviousChats(chats));
      } catch (err) {
        console.error("Failed to fetch chats:", err);
      }
    };

    fetchChats();

    const socket = io(API_BASE_URL, {
      withCredentials: true,
      transports: ["websocket", "polling"],
      autoConnect: true,
    });

    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("Socket connected:", socket.id);
    });

    socket.on("disconnect", (reason) => {
      console.log("Socket disconnected:", reason);
    });

    socket.on("connect_error", (err) => {
      console.error("Socket connection error:", err.message);
    });

    socket.on("ai-response", (payload) => {

      const normalized = normalizeMessage(payload, "assistant");

      if (!normalized) {
        console.warn("Could not normalize ai-response payload:", payload);
        return;
      }

      dispatch(addMessage(normalized));
    });

    return () => {
      isMounted = false;

      if (socketRef.current) {
        socketRef.current.off("connect");
        socketRef.current.off("disconnect");
        socketRef.current.off("connect_error");
        socketRef.current.off("ai-response");
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, [dispatch]);

  const resetTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    const element = e.target;
    element.style.height = "auto";
    element.style.height = `${element.scrollHeight}px`;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const loadChat = useCallback(
    async (chatId) => {
      try {
        const res = await axios.get(
          `${API_BASE_URL}/api/chat/messages/${chatId}`,
          { withCredentials: true },
        );

        let normalized = normalizeMessages(res.data.messages);

        // fallback if backend sends messages newest first and no timestamps
        if (
          normalized.length >= 2 &&
          !normalized[0].createdAt &&
          normalized[0].role === "assistant" &&
          normalized[1].role === "user"
        ) {
          normalized = [...normalized].reverse();
        }

        dispatch(setCurrentChatId(chatId));
        dispatch(setMessages(normalized));
        dispatch(closeSidebar());
      } catch (err) {
        console.error("Failed to load messages:", err);
      }
    },
    [dispatch],
  );

  const createNewChat = useCallback(async () => {
    let title = window.prompt("Enter chat title");
    if (title) title = title.trim();
    if (!title) return null;

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/chat`,
        { title },
        { withCredentials: true },
      );

      const newChat = response.data.chat;

      dispatch(
        addPreviousChat({
          _id: newChat._id,
          title: newChat.title,
        }),
      );

      dispatch(setCurrentChatId(newChat._id));
      dispatch(clearMessages());
      dispatch(closeSidebar());

      return newChat._id;
    } catch (err) {
      console.error("Failed to create chat:", err);
      return null;
    }
  }, [dispatch]);

  const handleSend = useCallback(async () => {
    const trimmedInput = input.trim();

    if (!trimmedInput) return;
    if (!socketRef.current) {
      console.error("Socket is not connected");
      return;
    }

    let chatId = currentChatId;

    if (!chatId) {
      chatId = await createNewChat();
      if (!chatId) return;
    }

    const userMessage = {
      role: "user",
      content: trimmedInput,
    };

    dispatch(addMessage(userMessage));

    socketRef.current.emit("ai-message", {
      content: trimmedInput,
      chat: chatId,
    });

    setInput("");
    resetTextareaHeight();
  }, [input, currentChatId, dispatch, createNewChat]);

  const handleLogOut = async () => {
    try {
      await axios.get(`${API_BASE_URL}/api/auth/logout`, {
        withCredentials: true,
      });
      dispatch(handleLogoutState());
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="landing-container">
        <nav className="landing-navbar">
          <h2 className="logo">AtlantisAI</h2>
        </nav>
        <main className="landing-hero">
          <h1>Welcome to AtlantisAI</h1>
          <p>Your AI chat assistant</p>
          <div className="hero-buttons">
            <Link to="/register">
              <button className="primary-btn">Create Account</button>
            </Link>
            <Link to="/login">
              <button className="secondary-btn">Login</button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="chat-layout">
      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-top">
          <button className="new-chat-btn" onClick={createNewChat}>
            <Plus size={18} /> New Chat
          </button>

          <div className="previous-chats">
            <h3>Previous Chats:</h3>
            {previousChats.map((chat) => {
              return (
                <div
                  key={chat._id}
                  className={`chat-item ${currentChatId === chat._id ? "active" : ""}`}
                  onClick={() => loadChat(chat._id)}
                >
                  {chat.title}
                </div>
              );
            })}
          </div>
        </div>

        <div className="sidebar-user">
          <button className="logout-btn" onClick={handleLogOut}>
            Logout
          </button>
        </div>
      </aside>

      {isSidebarOpen && (
        <div className="overlay" onClick={() => dispatch(closeSidebar())}></div>
      )}

      <main className="chat-main">
        <div className="mobile-header">
          <button
            className="menu-btn"
            onClick={() => dispatch(toggleSidebar())}
          >
            <Equal size={25} />
          </button>
          <h2 className="logo">AtlantisAI</h2>
          <div style={{ width: "24px" }}></div>
        </div>

        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message-wrapper ${msg.role}`}>
              <div className={`message ${msg.role}`}>{msg.content}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <div className="chat-input-container">
          <div className="chat-input">
            <textarea
              ref={textareaRef}
              className="chat-input-textarea"
              placeholder="Ask anything"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              rows="1"
            />
            <div className="right-input-actions">
              <button
                className={`send-btn-circle ${input.trim() ? "active" : ""}`}
                onClick={handleSend}
              >
                <ArrowUp />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
