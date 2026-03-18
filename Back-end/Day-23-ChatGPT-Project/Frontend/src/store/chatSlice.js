import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  previousChats: [],
  isSidebarOpen: false,
  currentChatId: null,
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setPreviousChats: (state, action) => {
      state.previousChats = Array.isArray(action.payload) ? action.payload : [];
    },

    addPreviousChat: (state, action) => {
      const newChat = action.payload;
      if (!newChat?._id) return;

      const alreadyExists = state.previousChats.some(
        (chat) => chat._id === newChat._id,
      );

      if (!alreadyExists) {
        state.previousChats.unshift(newChat);
      }
    },

    setMessages: (state, action) => {
      state.messages = Array.isArray(action.payload) ? action.payload : [];
    },

    clearMessages: (state) => {
      state.messages = [];
    },

    addMessage: (state, action) => {
      const msg = action.payload;

      if (!msg || typeof msg !== "object") return;
      if (!msg.content || typeof msg.content !== "string") return;

      state.messages.push({
        role: msg.role || "assistant",
        content: msg.content,
        createdAt: msg.createdAt || null,
      });
    },

    setCurrentChatId: (state, action) => {
      state.currentChatId = action.payload;
    },

    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },

    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },

    setLoginStatus: (state, action) => {
      state.isLoggedIn = action.payload;
      localStorage.setItem("isLoggedIn", String(action.payload));
    },

    handleLogoutState: (state) => {
      state.isLoggedIn = false;
      state.messages = [];
      state.previousChats = [];
      state.currentChatId = null;
      state.isSidebarOpen = false;
      localStorage.setItem("isLoggedIn", "false");
    },
  },
});

export const {
  setPreviousChats,
  addPreviousChat,
  setMessages,
  clearMessages,
  addMessage,
  setCurrentChatId,
  toggleSidebar,
  closeSidebar,
  setLoginStatus,
  handleLogoutState,
} = chatSlice.actions;

export default chatSlice.reducer;