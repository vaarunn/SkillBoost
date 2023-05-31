import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authServices from "../services/authServices";
import { persistStore } from "redux-persist";
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
      return thunkAPI.rejectWithValue(error);
    }
  }
);

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

export const login = createAsyncThunk(
  "/users/login",
  async (user, thunkAPI) => {
    try {
      return await authServices.loginService(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  "users/logout",
  async (user, thunkAPI) => {
    try {
      // const persistor = persistStore(userSlice);

      // persistor.purge();
      return await authServices.logoutService();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updatePassword = createAsyncThunk(
  "/users/updatePassword",
  async (passwordData, thunkAPI) => {
    try {
      return await authServices.updatePasswordService(passwordData);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateProfile = createAsyncThunk(
  "/users/updateProfile",
  async (userData, thunkAPI) => {
    try {
      return await authServices.updateProfileService(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetSuccessMessage: (state) => {
      state.successMessage = "";
    },
    resetErrorMessage: (state) => {
      state.errorMessage = "";
    },
    resetUser: (state) => {
      state.user = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isError = false;
        state.isSuccess = true;
        state.successMessage = action.payload.message;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload.response.data.message;
      })
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
        state.errorMessage = action.payload.response.data.message;
      })
      .addCase(updatePassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isError = false;
        state.isSuccess = true;
        state.successMessage = action.payload.message;
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload.response.data.message;
      })
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isError = false;
        state.isSuccess = true;
        state.successMessage = action.payload.message;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload.response.data.message;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isError = false;
        state.isSuccess = true;
        state.successMessage = action.payload.message;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload.response.data.message;
      });
  },
});

export const { resetSuccessMessage, resetErrorMessage, resetUser } =
  userSlice.actions;
export default userSlice.reducer;
