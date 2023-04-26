import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    getAllUsers(action, payload) {},
  },
});

export const { login } = userSlice.actions;
export const selectUser = (state) => state.users.user;
export default userSlice.reducer;
