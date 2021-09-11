import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import cocktailsSlice from "./cocktails";
import uiSlice from "./ui";

const store = configureStore({
    reducer: {
        cocktails: cocktailsSlice.reducer,
        ui: uiSlice.reducer,
    },
    devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
