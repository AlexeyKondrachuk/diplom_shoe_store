import { createSlice } from "@reduxjs/toolkit";
import { fetchBestSellerProducts } from "../../Utils/fetchBestSeller";

const initialState = {
  items: [],
  status: "Loading" || "succses" || "error", // loading | success | error
};

export const productBestSellerSlice = createSlice({
  name: "bestSeller",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchBestSellerProducts.pending, (state, action) => {
      state.status = "Loading";
      state.items = [];
    });

    builder.addCase(fetchBestSellerProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "Succes";
    });

    builder.addCase(fetchBestSellerProducts.rejected, (state, action) => {
      state.status = "Error";
      state.items = [];
    });
  },
});

export const { setItems } = productBestSellerSlice.actions;

export default productBestSellerSlice.reducer;
