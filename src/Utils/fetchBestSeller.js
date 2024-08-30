import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBestSellerProducts = createAsyncThunk(
  "products/fetchBestSellerProductsStatus",
  async (getBestSeller) => {
    const data = await fetch(`http://localhost:7070/api/${getBestSeller}`).then(
      (responce) => responce.json()
    );

    return data;
  }
);
