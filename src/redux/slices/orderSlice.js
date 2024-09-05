import { createSlice } from "@reduxjs/toolkit";
import { fetchPostOrder } from "../../Utils/fetchOrder";



const initialState = {
  order: {
    owner: {},
    items: [],
  },
  status: null, // loading | success | error
  doneOrder: false
};

console.log(location)
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
    setDoneOrder(state, action) {
      state.doneOrder = action.payload
    },
    setStatus(state, action){
      state.status = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPostOrder.pending, (state, action) => {
      state.status = "Loading";
      state.order.items = { ...action.payload };
      // state.order.owner = ({...action.payload});
    });

    builder.addCase(fetchPostOrder.fulfilled, (state, action) => {
      state.status = "Succes";
      localStorage.removeItem("item")
      localStorage.removeItem("count")
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

export const { addOrderOwner, addOrderItems, setDoneOrder, setStatus } = orderSlice.actions;

export default orderSlice.reducer;
