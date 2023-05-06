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
    console.log(course);
    try {
      return await courseService.getAllCourseService(course);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
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
        state.errorMessage = action.payload;
      });
  },
});

export default courseSlice.reducer;
