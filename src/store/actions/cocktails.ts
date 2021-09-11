import { createAsyncThunk } from "@reduxjs/toolkit";
import { uiActions } from "../ui";
import axios from "axios";
import { cocktailsActions } from "../cocktails";

export const searchCocktail = createAsyncThunk(
    "cocktails/searchCocktail",
    async (cocktailName: string, thunkAPI) => {
        try {
            const response = await axios.get(`/search.php?s=${cocktailName}`);
            thunkAPI.dispatch(
                cocktailsActions.setSearchedCocktail(cocktailName)
            );
            return response.data.drinks || [];
        } catch (err) {
            thunkAPI.dispatch(uiActions.setActionRejected(true));
            if (!axios.isAxiosError(err)) {
                throw err;
            }
            if (!err.response) {
                throw err;
            }
            return thunkAPI.rejectWithValue(err.response.data);
        }
    }
);

export const getRandomCocktails = createAsyncThunk(
    "cocktail/random",
    async (_, thunkAPI) => {
        try {
            const responses = await Promise.all([
                axios.get("/random.php"),
                axios.get("/random.php"),
                axios.get("/random.php"),
                axios.get("/random.php"),
            ]);
            const responsesCocktails = responses.map(
                (res) => res.data.drinks[0]
            );
            return responsesCocktails;
        } catch (err) {
            thunkAPI.dispatch(uiActions.setActionRejected(true));
            if (!axios.isAxiosError(err)) {
                throw err;
            }
            if (!err.response) {
                throw err;
            }
            return thunkAPI.rejectWithValue(err.response.data);
        }
    }
);
