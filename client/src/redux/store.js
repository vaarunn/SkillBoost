import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import courseReducer from "./slices/courseSlice";
import adminReducer from "./slices/adminSlice";
import lectureReducer from "./slices/lectureSlice";
import paymentReducer from "./slices/paymentSlice";

//redux persistance
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  user: userReducer,
  course: courseReducer,
  admin: adminReducer,
  lecture: lectureReducer,
  payment: paymentReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});
