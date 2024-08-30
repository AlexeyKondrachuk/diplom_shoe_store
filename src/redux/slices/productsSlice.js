import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../../Utils/fetchProducts";

const initialState = {
  items: [],
  status: "Loading", // loading | success | error
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = "Loading";
      state.items = [];
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "Succes";
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = "Error";
      state.items = [];
    });
  },
});

export const { setItems } = productsSlice.actions;

export default productsSlice.reducer;
