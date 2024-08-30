import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sizeCategory: null,
  offSet: 0,
  searchValue: "",
  searchValueHeader: "",
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCaregoryId(state, action) {
      state.categoryId = action.payload;
      state.offSet = 0;
    },
    setSizeCategory(state, action) {
      state.sizeCategory = action.payload;
    },
    setOffSet(state, action) {
      state.offSet = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
      state.searchValueHeader = "";
    },
    setSearchValueHeader(state, action) {
      state.searchValueHeader = action.payload;
      state.searchValue = action.payload;
    },
  },
});


export const {
  setCaregoryId,
  setSizeCategory,
  setOffSet,
  setSearchValue,
  setSearchValueHeader,
} = filterSlice.actions;

export default filterSlice.reducer;
