import { configureStore } from "@reduxjs/toolkit"; 

import interfaceSlice from "./InterfaceSlicer";
import cartSlice from "./CartSlicer";

const store = configureStore({
    reducer: { interface: interfaceSlice.reducer, cart: cartSlice.reducer }
});

export default store;