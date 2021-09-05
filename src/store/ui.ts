import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isNavShown: false,
};

const uiSlice = createSlice({
    initialState,
    name: "ui",
    reducers: {
        toggleNav(state) {
            state.isNavShown = !state.isNavShown;
        },
    },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
