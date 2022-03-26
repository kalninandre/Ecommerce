import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0,
    },
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const index = state.items.find(item => item.id === newItem.id)

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
        },

        removeItem: (state, action) => {
             const id = action.payload;
             const index = state.items.find(item => item.id === id)

             if (index.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
             } else {
                 index.totalPrice -= index.price;
                 index.quantity--;
                }
            state.totalQuantity--;
        },
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;