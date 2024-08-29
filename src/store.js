import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterReduxSlice";
export const store =  configureStore({
    reducer : {
        counter: counterSlice
    }
}) 