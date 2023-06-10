import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authServices from "../services/authServices";

const initialState = {
  user: null,
  isLoading: false,
  isError: null,
  isSuccess: null,
  successMessage: null,
  errorMessage: null,

  loginSuccessMessage: null,
  loginErrorMessage: null,

  registerSuccessMessage: null,
  registerErrorMessage: null,

  updateProfileSuccess: null,
  updateProfileError: null,

  logoutSuccess: null,
  logoutError: null,
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

export const removeCourseFromWatchList = createAsyncThunk(
  "users/removeFromPlaylist",
  async (courseId, thunkAPI) => {
    try {
      return await authServices.removeCourseFromWatchListService(courseId);
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
      state.successMessage = null;
    },
    resetErrorMessage: (state) => {
      state.errorMessage = null;
    },
    resetUser: (state) => {
      state.user = "";
    },
    resetLogin: (state) => {
      state.loginSuccessMessage = null;
      state.loginErrorMessage = null;
    },
    resetRegister: (state) => {
      state.registerSuccessMessage = null;
      state.registerErrorMessage = null;
    },
    resetProfile: (state) => {
      state.updateProfileSuccess = null;
      state.updateProfileError = null;
    },
    resetLogout: (state) => {
      state.logoutSuccess = null;
      state.logoutError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isError = false;
        state.isSuccess = true;
        state.registerSuccessMessage = action.payload.message;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.registerErrorMessage = action.payload.response.data.message;
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
        state.loginSuccessMessage = action.payload.message;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.loginErrorMessage = action.payload.response.data.message;
      })
      .addCase(updatePassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isError = false;
        state.isSuccess = true;
        state.updateProfileSuccess = action.payload.message;
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.isLoading = false;
        state.updateProfileError = action.payload.response.data.message;
      })
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isError = false;
        state.isSuccess = true;
        state.updateProfileSuccess = action.payload.message;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.updateProfileError = action.payload.response.data.message;
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
      })
      .addCase(removeCourseFromWatchList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeCourseFromWatchList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isError = false;
        state.isSuccess = true;
        state.successMessage = action.payload.message;
      })
      .addCase(removeCourseFromWatchList.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload.response.data.message;
      });
  },
});

export const {
  resetSuccessMessage,
  resetErrorMessage,
  resetUser,
  resetLogin,
  resetRegister,
  resetProfile,
  resetLogout,
} = userSlice.actions;
export default userSlice.reducer;
