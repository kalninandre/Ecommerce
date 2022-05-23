import { createSlice } from '@reduxjs/toolkit';

const interfaceSlice = createSlice({
    name: 'interface',
    initialState: { cartIsVisible: false, notification: null },
    reducers: {
        toggleCart(state) {
            state.cartIsVisible = !state.cartIsVisible;
        },

        setNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            };
        },
    },
});

export const interfaceActions = interfaceSlice.actions;

export default interfaceSlice;
