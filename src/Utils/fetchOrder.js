import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPostOrder = createAsyncThunk(
  "order/fetchPostOrder",
  async function (orderPost, { rejectWithValue }) {
    try {
      console.log(orderPost);
      const response = await fetch("http://localhost:7070/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderPost),
      });

      if (!response.ok) {
        throw new Error("Can't add order. Server error.");
      }
    } catch (Error) {
      return rejectWithValue(Error.message);
    }
  }
);
