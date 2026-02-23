import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    // ✅ Required Function 1
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }

      state.totalQuantity += 1;
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },

    // ✅ Required Function 2
    removeItem: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find(item => item.id === itemId);

      if (!existingItem) return;

      state.totalQuantity -= existingItem.quantity;
      state.items = state.items.filter(item => item.id !== itemId);

      state.totalPrice = state.items.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },

    // ✅ Required Function 3
    updateQuantity: (state, action) => {
      const { id, amount } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (!existingItem) return;

      existingItem.quantity += amount;

      if (existingItem.quantity <= 0) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.totalPrice =
          existingItem.quantity * existingItem.price;
      }

      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );

      state.totalPrice = state.items.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },
  },
});

export const { addItem, removeItem, updateQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
