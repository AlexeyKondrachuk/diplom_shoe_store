import { createSlice } from "@reduxjs/toolkit";
import { fetchPostOrder } from "../../Utils/fetchOrder";

const initialState = {
  order: {
    owner: {},
    items: [],
  },
  status: "Loading", // loading | success | error
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrderOwner(state, action) {
      state.order.owner = { ...action.payload };
    },
    addOrderItems(state, action) {
      state.order.items = [...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPostOrder.pending, (state, action) => {
      state.status = "Loading";
      state.order.items = { ...action.payload };
      // state.order.owner = ({...action.payload});
    });

    builder.addCase(fetchPostOrder.fulfilled, (state, action) => {
      state.status = "Succes";
      state.order.owner = {};
      state.order.items = [];
    });

    builder.addCase(fetchPostOrder.rejected, (state, action) => {
      state.status = "Error";
      state.order.items = [];
      state.order.owner = {};
    });
  },
});

export const { addOrderOwner, addOrderItems } = orderSlice.actions;

export default orderSlice.reducer;
