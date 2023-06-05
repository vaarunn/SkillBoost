import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import courseService from "../services/courseServices";

const initialState = {
  isLoading: false,
  successMessage: "",
  errorMessage: "",
  course: "",
};

export const getAllCourse = createAsyncThunk(
  "/courses/getAllCourses",
  async (course, thunkAPI) => {
    try {
      return await courseService.getAllCourseService(course);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const requestCourse = createAsyncThunk(
  "/courses/courserequest",
  async (userData, thunkAPI) => {
    try {
      return await courseService.requestCourseService(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const sendMessage = createAsyncThunk(
  "/other/contact",
  async (userData, thunkAPI) => {
    try {
      return await courseService.sendMessageService(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createNewCourse = createAsyncThunk(
  "/courses/createCourse",
  async (courseData, thunkAPI) => {
    try {
      return await courseService.createCourseService(courseData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteCourse = createAsyncThunk(
  "/courses/courseId",
  async (courseId, thunkAPI) => {
    try {
      return await courseService.deleteCourseService(courseId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addCourseToPlaylist = createAsyncThunk(
  "/courses/addToPlaylist",
  async (courseId, thunkAPI) => {
    try {
      return await courseService.addCourseToPlaylistService(courseId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const courseSlice = createSlice({
  name: "course",
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
      .addCase(getAllCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.course = action.payload;
        state.successMessage = action.payload.message;
      })
      .addCase(getAllCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload.response.data.message;
      })
      .addCase(requestCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(requestCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successMessage = action.payload.message;
      })
      .addCase(requestCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload.response.data.message;
      })
      .addCase(sendMessage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successMessage = action.payload.message;
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload.response.data.message;
      })
      .addCase(createNewCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNewCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successMessage = action.payload.message;
      })
      .addCase(createNewCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload.response.data.message;
      })
      .addCase(deleteCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successMessage = action.payload.message;
      })
      .addCase(deleteCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload.response.data.message;
      })
      .addCase(addCourseToPlaylist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addCourseToPlaylist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successMessage = action.payload.message;
      })
      .addCase(addCourseToPlaylist.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload.response.data.message;
      });
  },
});

export const { resetErrorMessage, resetSuccessMessage } = courseSlice.actions;

export default courseSlice.reducer;
