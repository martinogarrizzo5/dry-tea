import { createSlice } from "@reduxjs/toolkit";
import { searchCocktail, getRandomCocktails } from "./actions/cocktails";

type InitialState = {
    searchedCocktail: any;
    cocktails: any;
    randomCocktails: any;
};

const initialState: InitialState = {
    searchedCocktail: null,
    cocktails: null,
    randomCocktails: null,
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
        // search cocktails
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
        builder.addCase(searchCocktail.rejected, (state, action) => {
            state.cocktails = {};
        });

        // get random cocktails
        builder.addCase(getRandomCocktails.fulfilled, (state, action) => {
            const normalizedCocktails = action.payload.reduce(
                (byId: any, cocktail: any) => {
                    byId[cocktail.idDrink] = cocktail;
                    return byId;
                },
                {}
            );
            state.randomCocktails = normalizedCocktails;
        });
        builder.addCase(getRandomCocktails.pending, (state, action) => {
            state.randomCocktails = null;
        });
        builder.addCase(getRandomCocktails.rejected, (state, action) => {
            state.randomCocktails = {};
        });
    },
});

export const cocktailsActions = cocktailsSlice.actions;

export default cocktailsSlice;
