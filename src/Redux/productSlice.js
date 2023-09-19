import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "items",
  
  initialState: {
    selectedCategory: "SOFAS",
  },

  reducers: {
    filterCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const getSelectedCategory = (state) => state.items.selectedCategory;
export const { filterCategory } = productSlice.actions;
export default productSlice.reducer;
