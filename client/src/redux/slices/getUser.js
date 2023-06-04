import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  isLoading: false,
  isError: "",
  isSuccess: "",
  successMessage: null,
  errorMessage: null,
};

export const checkUser = createAsyncThunk(
  "/users/me",
  async (user, thunkAPI) => {
    try {
      return await authServices.checkUserService();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const getUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetSuccessMessage: (state) => {
      state.successMessage = null;
    },
    resetErrorMessage: (state) => {
      state.errorMessage = null;
    },
    resetUser: (state) => {
      state.user = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isError = false;
        state.isSuccess = true;
        state.successMessage = action.payload.message;
      })
      .addCase(checkUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkUser.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload.response.data.message;
      });
  },
});

export const { resetSuccessMessage, resetErrorMessage, resetUser } =
  getUserSlice.actions;
export default getUserSlice.reducer;
