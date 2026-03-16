import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { io } from "socket.io-client";
import {
  addMessage,
  setCurrentChatId,
  setMessages,
  saveCurrentChat,
  toggleSidebar,
  closeSidebar,
  setPreviousChats,
  setUser,
  handleLogoutState,
} from "../store/chatSlice"; // Adjust path based on your folder structure

import "../styles/chat.css";
import "../styles/home.css";
import { ArrowUp, Equal, Plus } from "lucide-react";
import axios from "axios";

function Home() {
  const dispatch = useDispatch();
  const [socket, setSocket] = useState(null);

  // Access Redux State
  const {
    messages,
    previousChats,
    isSidebarOpen,
    user,
    currentChatId,
    isLoggedIn,
  } = useSelector((state) => state.chat);

  // Local state for UI-only variables
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInputChange = (e) => {
    const element = e.target;
    setInput(element.value);
    element.style.height = "auto";
    element.style.height = `${element.scrollHeight}px`;
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/chat", { withCredentials: true })
      .then((res) => {
        // console.log(res.data.chats[0].name.firstName)
        dispatch(setPreviousChats(res.data.chats.reverse()));
        dispatch(setUser(res.data.chats[0].name));
      })
      .catch((err) => console.log(err));

    const tempSocket = io("http://localhost:3000", {
      withCredentials: true,
    });
    tempSocket.on("ai-response", (messagePayload) => {
      dispatch(addMessage(messagePayload));
    });
    setSocket(tempSocket);
  }, []);

  const handleSend = () => {
    if (!input.trim() || !socket) return;
    const userMessage = { role: "user", content: input };

    // 1. Dispatch User Message
    dispatch(addMessage(userMessage));

    socket.emit("ai-message", {
      content: input,
      chatId: currentChatId,
    });

    // 2. Clear Input and Reset Height
    setInput("");
    const textarea = document.querySelector(".chat-input-textarea");
    if (textarea) textarea.style.height = "auto";
  };

  const loadChat = async (chatId) => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/chat/messages/${chatId}`,
        {
          withCredentials: true,
        },
      );
      // This is the correct use of setMessages!
      // It fills the screen with the messages of the selected chat.
      dispatch(setMessages(res.data.messages));
      dispatch(closeSidebar()); // Close sidebar on mobile
    } catch (err) {
      console.error("Failed to load messages", err);
    }
  };

  const createNewChat = async () => {
    let title = window.prompt("Enter chat title");
    if (title) title = title.trim();
    if (!title) return;

    const response = await axios.post(
      "http://localhost:3000/api/chat",
      {
        title,
      },
      { withCredentials: true },
    );

    dispatch(
      saveCurrentChat({
        title: response.data.chat.title,
        id: response.data.chat._id,
      }),
    );
    dispatch(closeSidebar());
  };

  const handleLogOut = async () => {
    axios.get("http://localhost:3000/api/auth/logout", {
      withCredentials: true,
    });
    dispatch(handleLogoutState());
  };

  useEffect(() => {
    // If we think we're logged in but an API call fails, force logout
    const handleGlobalError = (error) => {
      if (error.response && error.response.status === 401) {
        dispatch(handleLogoutState());
      }
    };

    // You can attach this to your axios instance or specific calls
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        handleGlobalError(error);
        return Promise.reject(error);
      },
    );
  }, [dispatch]);

  if (!isLoggedIn) {
    return (
      <div className="landing-container">
        <nav className="landing-navbar">
          <h2 className="logo">AtlantisAI</h2>
          <div className="nav-links">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
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
      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-top">
          <button className="new-chat-btn" onClick={createNewChat}>
            <Plus size={18} /> New Chat
          </button>
          <div className="previous-chats">
            <h3>Previous Chats:</h3>
            {previousChats.map((chat) => (
              <div
                key={chat._id || chat.id}
                className={`chat-item ${currentChatId === chat._id ? "active" : ""}`}
                onClick={() => {
                  dispatch(setCurrentChatId(chat._id || chat.id));
                  loadChat(chat._id || chat.id);
                }}
              >
                {chat.title}
              </div>
            ))}
          </div>
        </div>

        <div className="sidebar-user">
          <div className="user-info">
            <div className="user-avatar">{user.charAt(0).toUpperCase()}</div>
            <span>{user ? user : "User"}</span>
          </div>
          <button className="logout-btn" onClick={handleLogOut}>
            Logout
          </button>
        </div>
      </aside>

      {/* Overlay */}
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
        </div>

        <div className="chat-input-container">
          <div className="chat-input">
            <textarea
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
