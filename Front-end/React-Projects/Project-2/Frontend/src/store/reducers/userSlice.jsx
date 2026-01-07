import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUser: (state, action) => {
      state.users = action.payload;
    },
    removeUser: (state, action) => {
      state.users = null;
    },
  },
});

export const { loadUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
