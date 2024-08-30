import { createSlice } from "@reduxjs/toolkit";
import { fetchProductId } from "../../Utils/fetchProfuctId";

const initialState = {
  items: [],
  status: "Loading", // loading | success | error
};

export const productIdSlice = createSlice({
  name: "productId",
  initialState,
  reducers: {
    setItemId(state, action) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProductId.pending, (state, action) => {
      state.status = "Loading";
      state.items = [];
    });

    builder.addCase(fetchProductId.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "Succes";
    });

    builder.addCase(fetchProductId.rejected, (state, action) => {
      state.status = "Error";
      state.items = [];
    });
  },
});

export const { setItemId } = productIdSlice.actions;

export default productIdSlice.reducer;
