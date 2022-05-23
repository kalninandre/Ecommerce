import { configureStore } from '@reduxjs/toolkit';

import interfaceSlice from './InterfaceSlicer';
import cartSlice from './CartSlicer';

const store = configureStore({
    reducer: { cart: cartSlice.reducer, interface: interfaceSlice.reducer },
});

export default store;
