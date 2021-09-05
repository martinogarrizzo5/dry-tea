import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cocktails: null,
    selectedCocktail: null,
};

const cocktailsSlice = createSlice({
    initialState,
    name: "cocktails",
    reducers: {},
});

export const cocktailsActions = cocktailsSlice.actions;

export default cocktailsSlice;
