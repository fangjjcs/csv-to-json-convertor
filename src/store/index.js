import { configureStore } from "@reduxjs/toolkit";
import convertSlice from "./convert-slice";

const store = configureStore({
    reducer: {
        convert: convertSlice.reducer
    }
})

export default store;