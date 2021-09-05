import { configureStore, combineReducers } from "@reduxjs/toolkit";

import cocktailsSlice from "./cocktails";
import uiSlice from "./ui";

const store = configureStore({
    reducer: combineReducers({
        cocktails: cocktailsSlice.reducer,
        ui: uiSlice.reducer,
    }),
    devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
