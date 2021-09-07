import { createSlice } from "@reduxjs/toolkit";
import { searchCocktail } from "./actions/cocktails";

type InitialState = {
    searchedCocktail: any;
    cocktails: any;
};

const initialState: InitialState = {
    searchedCocktail: null,
    cocktails: null,
};

const cocktailsSlice = createSlice({
    initialState,
    name: "cocktails",
    reducers: {
        setSearchedCocktail(state, action) {
            state.searchedCocktail = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(searchCocktail.fulfilled, (state, action) => {
            const normalizedCocktails = action.payload.reduce(
                (byId: any, cocktail: any) => {
                    byId[cocktail.idDrink] = cocktail;
                    return byId;
                },
                {}
            );

            state.cocktails = normalizedCocktails;
        });
        builder.addCase(searchCocktail.pending, (state, action) => {
            state.cocktails = null;
        });
    },
});

export const cocktailsActions = cocktailsSlice.actions;

export default cocktailsSlice;
