import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductId = createAsyncThunk(
  "productsId/fetchProductsStatus",
  async (productId) => {
    console.log(productId);
    const data = await fetch(
      `http://localhost:7070/api/items/${productId}`
    ).then((responce) => responce.json());
    console.log("это запрос сервера", data);
    return data;
  }
);
