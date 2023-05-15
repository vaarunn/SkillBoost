import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import paymentServices from "../services/paymentService";

const initialState = {
  isLoading: true,
  successMessage: "",
  errorMessage: "",
  payment: "",
};

export const createSubscription = createAsyncThunk(
  "/payment/subscribe",
  async (data, thunkAPI) => {
    try {
      return await paymentServices.createSubscriptionService();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createSubscription.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createSubscription.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successMessage = action.payload.message;
        state.payment = action.payload;
      })
      .addCase(createSubscription.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload.response.data.message;
      });
  },
});

export default paymentSlice.reducer;
