import { configureStore } from "@reduxjs/toolkit";
import { ProductSlicer } from "./Reducers/ProducerSlicer";
export const store = configureStore({
    reducer:{
        product: ProductSlicer.reducer
    }
})