import { createSlice } from "@reduxjs/toolkit";
import { addOrderItems, setDoneOrder } from "./orderSlice"; 

export const itemsInCart =
  localStorage.getItem("item") !== null
    ? JSON.parse(localStorage.getItem("item"))
    : [];
const countInCart =
  localStorage.getItem("count") !== null
    ? JSON.parse(localStorage.getItem("count"))
    : 1;
const totalPrice =
  localStorage.getItem("totalPrice") !== null
    ? JSON.parse(localStorage.getItem("totalPtice"))
    : 0;

export const calcTotalPrice = () => {
  return itemsInCart.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};

const initialState = {
  totalPrice: totalPrice,
  item: itemsInCart,
  count: countInCart,
  sizeCategory: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setSizeCategory(state, action) {
      state.sizeCategory = action.payload;
    },

    addProduct(state, action) {
      const findItems = state.item.find((obj) => obj.id === action.payload.id);
      if (findItems) {
        findItems.count = action.payload.count;
        state.sizeCategory = null;
        state.count = 1;
      } else {
        state.item.push({ ...action.payload });
        state.sizeCategory = null;
        state.count = 1;
      }

      localStorage.setItem(
        "item",
        JSON.stringify(state.item.map((item) => item))
      );
      localStorage.setItem("count", JSON.stringify(action.payload.count));
      localStorage.setItem(
        "totalPrice",
        JSON.stringify(
          state.item.reduce((sum, obj) => obj.price * obj.count + sum, 0)
        )
      );
    },

    removeProduct(state, action) {
      if (itemsInCart) {
        state.item = state.item.filter((obj) => obj.id !== action.payload);
      }
      localStorage.setItem(
        "item",
        JSON.stringify(state.item.map((item) => item))
      );
      localStorage.setItem(
        "totalPrice",
        JSON.stringify(
          state.item.reduce((sum, obj) => obj.price * obj.count + sum, 0)
        )
      );
    },

    clearProducts(state, acrion) {
      state.item = [];
    },

    increment(state, action) {
      if (10 > state.count > 0) {
        state.count++;
      }
      localStorage.setItem("count", JSON.stringify(state.count));
    },
    decrement(state, action) {
      if (state.count > 1) {
        state.count--;
      }

      localStorage.setItem("count", JSON.stringify(state.count));
    },
    
  },
  extraReducers: (builder) => {
      builder.addCase(setDoneOrder, (state, action) => {
        state.item = []
      })
  }
});

export const {
  addProduct,
  removeProduct,
  clearProducts,
  increment,
  decrement,
  setSizeCategory,
} = cartSlice.actions;

export default cartSlice.reducer;
