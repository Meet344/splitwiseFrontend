import { configureStore } from "@reduxjs/toolkit";
import groupReducer from "../features/groupSlice"

export const store = configureStore({
    reducer: groupReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})