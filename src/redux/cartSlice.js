import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.push({ ...action.payload, qty: 1 });
      }
    },

    decreaseQty: (state, action) => {
      const item = state.find((i) => i.id === action.payload);

      if (item) {
        if (item.qty > 1) {
          item.qty -= 1;
        } else {
          return state.filter((i) => i.id !== action.payload);
        }
      }
    },

    RemoveItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, decreaseQty, RemoveItem } = cartSlice.actions;
export default cartSlice.reducer;
