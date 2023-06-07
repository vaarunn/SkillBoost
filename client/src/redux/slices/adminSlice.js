import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminServices from "../services/adminService";

const initialState = {
  isLoading: "",
  successMessage: "",
  errorMessage: "",
  admin: "",
};

export const getAllUsers = createAsyncThunk(
  "/admin/getAllUsers",
  async (users, thunkAPI) => {
    try {
      return await adminServices.getAllUsersService();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateUserRole = createAsyncThunk(
  "/admin/user",
  async (userId, thunkAPI) => {
    try {
      return await adminServices.updateUserRoleService(userId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "/admin/delete",
  async (userId, thunkAPI) => {
    try {
      return await adminServices.deleteUserService(userId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAdminStats = createAsyncThunk(
  "/admin/stats",
  async (data, thunkAPI) => {
    try {
      return await adminServices.getAdminStatsService();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    resetSuccessMessage: (state) => {
      state.successMessage = null;
    },
    resetErrorMessage: (state) => {
      state.errorMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successMessage = action.payload.message;
        state.admin = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload.response.data.message;
      })
      .addCase(updateUserRole.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserRole.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successMessage = action.payload.message;
        state.admin = action.payload;
      })
      .addCase(updateUserRole.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload.response.data.message;
      })
      .addCase(getAdminStats.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAdminStats.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successMessage = action.payload.message;
        state.admin = action.payload;
      })
      .addCase(getAdminStats.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload.response.data.message;
      })
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successMessage = action.payload.message;
        state.admin = action.payload;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload.response.data.message;
      });
  },
});

export const { resetSuccessMessage, resetErrorMessage } = adminSlice.actions;
export default adminSlice.reducer;
