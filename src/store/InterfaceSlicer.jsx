import { createSlice } from '@reduxjs/toolkit';

const interfaceSlice = createSlice({
    name: 'interface',
    initialState: { cartIsVisible: false },
    reducers: {
        toggleCart(state) {
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
});

export const interfaceActions = interfaceSlice.actions;

export default interfaceSlice;