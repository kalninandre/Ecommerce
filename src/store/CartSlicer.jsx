import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalPrice: 0,
        filled: false,
    },
    reducers: {
        loadCart: (state, action) => {
            state.items = action.payload.items;
            state.totalQuantity = action.payload.totalQuantity;
            state.totalPrice = action.payload.totalPrice;
        },

        addItem: (state, action) => {
            const newItem = action.payload;
            const index = state.items.find(item => item.id === newItem.id)
            state.filled = true;

            if (!index) {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                })
            } else {
                index.quantity++;
                index.totalPrice += newItem.price;
            }
            state.totalQuantity++;
            state.totalPrice += newItem.price;
        },

        removeItem: (state, action) => {
             const id = action.payload;
             const index = state.items.find(item => item.id === id)
             state.filled = true;

             if (index.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
             } else {
                 index.totalPrice -= index.price;
                 index.quantity--;
                }
            state.totalQuantity--;
            state.totalPrice -= index.price;
        },
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;