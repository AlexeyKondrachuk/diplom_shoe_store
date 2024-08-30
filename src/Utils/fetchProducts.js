import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProductsStatus",
  async (productsCatalog) => {
    const data = await fetch(
      `http://localhost:7070/api/items/${productsCatalog}`
    ).then((responce) => responce.json());
    console.log("это запрос сервера", data);
    return data;
  }
);
