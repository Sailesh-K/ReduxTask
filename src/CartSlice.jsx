import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      name: "iPhone 9",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      brand: "Apple",
      category: "smartphones",
      quantity:1

  },
  {
      id: 2,
      name: "iPhone X",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      brand: "Apple",
      category: "smartphones",
      quantity:1

  },
  {
      id: 3,
      name: "Samsung Universe 9",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      brand: "Samsung",
      category: "smartphones",
      quantity:1

  },
  {
      id: 4,
      name: "OPPOF19",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      brand: "OPPO",
      category: "smartphones",
      quantity:1
  },
  {
      id: 5,
      name: "Huawei P30",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      brand: "Huawei",
      category: "smartphones" ,
      quantity:1 
  }
  ],
  totalQuantity: 5,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
      }
      state.totalQuantity++;
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
      state.totalQuantity--;
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
