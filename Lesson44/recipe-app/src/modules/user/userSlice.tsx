import { createSlice } from "@reduxjs/toolkit";
import { type User } from "./models";

export const userSlice = createSlice({
  name: "user",
  initialState: { loggedIn: false } as User,
  reducers: {
    login: (state) => {
      return { ...state, loggedIn: true };
    },
    logout: (state) => {
      return { ...state, loggedIn: false };
    },
    updateUser: (state, action) => {
      // TODO: update user
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
