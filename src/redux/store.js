import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import cart from "./slices/cartSlice";
import productsBestSeller from "./slices/productsBestSellerSlice";
import products from "./slices/productsSlice";
import productId from "./slices/productIdSlice";
import order from "./slices/orderSlice";

export const store = configureStore({
  reducer: {
    filter,
    cart,
    productsBestSeller,
    products,
    productId,
    order,
  },
});
