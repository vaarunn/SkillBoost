import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import lectureServices from "../services/lectureServices";

const initialState = {
  lecture: "",
  successMessage: "",
  errorMessage: "",
  isLoading: "",
};

export const getCourseLecture = createAsyncThunk(
  "/course/:courseid",
  async (courseId, thunkAPI) => {
    try {
      return await lectureServices.getCourseLectureService(courseId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addCourseLecture = createAsyncThunk(
  "/course/lectures/:courseId",
  async (lectureData, thunkAPI) => {
    try {
      return await lectureServices.addCourseLectureService(lectureData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteCourseLecture = createAsyncThunk(
  "course/:courseId/lecture/:lectureId",
  async (dataId, thunkAPI) => {
    try {
      return await lectureServices.deleteCourseLectureService(dataId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const lectureSlice = createSlice({
  name: "lecture",
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
      .addCase(getCourseLecture.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCourseLecture.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successMessage = action.payload.message;
        state.lecture = action.payload;
      })
      .addCase(getCourseLecture.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload.response.data.message;
      })
      .addCase(addCourseLecture.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addCourseLecture.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successMessage = action.payload.message;
        state.lecture = action.payload;
      })
      .addCase(addCourseLecture.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload.response.data.message;
      })
      .addCase(deleteCourseLecture.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCourseLecture.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successMessage = action.payload.message;
        state.lecture = action.payload;
      })
      .addCase(deleteCourseLecture.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload.response.data.message;
      });
  },
});

export const { resetErrorMessage, resetSuccessMessage } = lectureSlice.actions;
export default lectureSlice.reducer;
