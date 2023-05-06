import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authServices from "../services/authServices";

const initialState = {
  user: "",
  isLoading: false,
  isError: "",
  isSuccess: "",
  successMessage: "",
  errorMessage: "",
};

export const register = createAsyncThunk(
  "/users/register",
  async (user, thunkAPI) => {
    try {
      return await authServices.registerService(user);
    } catch (error) {
      console.log(error);
      const message = error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const checkUser = createAsyncThunk(
  "/users/me",
  async (user, thunkAPI) => {
    try {
      return await authServices.checkUserService();
    } catch (error) {
      const message = error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk(
  "/users/login",
  async (user, thunkAPI) => {
    try {
      return await authServices.loginService(user);
    } catch (error) {
      const message = error.message;
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(checkUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(checkUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isError = false;
        state.isSuccess = true;
        state.successMessage = action.payload.message;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      });
  },
});

export default userSlice.reducer;
