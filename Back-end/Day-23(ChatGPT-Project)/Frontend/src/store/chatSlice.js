import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
    previousChats: [],
    isSidebarOpen: false,
    user: "",
    currentChatId: null,
    isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
  },
  reducers: {
    setPreviousChats: (state, action) => {
      state.previousChats = action.payload;
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    setCurrentChatId: (state, action) => {
      state.currentChatId = action.payload;
    },
    saveCurrentChat: (state, action) => {
      const { title, _id } = action.payload;
      state.currentChatId = _id;
      if (state.messages.length > 0) {
        state.previousChats.unshift({
          _id,
          title: title,
          msgs: state.messages,
        });
        state.messages = [];
      }
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
    setUser: (state, action) => {
      state.user = action.payload.firstName;
    },
    setLoginStatus: (state, action) => {
      state.isLoggedIn = action.payload;
      localStorage.setItem("isLoggedIn", action.payload);
    },
    handleLogoutState: (state) => {
      state.isLoggedIn = false;
      state.messages = [];
      state.previousChats = [];
      state.currentChatId = null;
      localStorage.setItem("isLoggedIn", "false");
    },
  },
});

export const {
  setPreviousChats,
  setMessages,
  addMessage,
  setCurrentChatId,
  saveCurrentChat,
  toggleSidebar,
  closeSidebar,
  setUser,
  setLoginStatus,
  handleLogoutState,
} = chatSlice.actions;
export default chatSlice.reducer;
