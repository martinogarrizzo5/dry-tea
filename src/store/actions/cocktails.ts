import { createAsyncThunk } from "@reduxjs/toolkit";
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
