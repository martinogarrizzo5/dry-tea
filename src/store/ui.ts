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

            // prevent scroll when nav is shown
            if (state.isNavShown) {
                window.scrollTo(0, 0);
                window.onscroll = function () {
                    window.scrollTo(0, 0);
                };
            } else {
                window.onscroll = () => {};
            }
        },
    },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
