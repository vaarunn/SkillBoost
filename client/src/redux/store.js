import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import courseReducer from "./slices/courseSlice";
import adminReducer from "./slices/adminSlice";
import lectureReducer from "./slices/lectureSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    course: courseReducer,
    admin: adminReducer,
    lecture: lectureReducer,
  },
});
