import { createSlice } from "@reduxjs/toolkit";

export enum Language {
  English,
  Spanish,
  Italian,
  Germany,
  French,
}

type InitialState = {
  isNavShown: boolean;
  isActionRejected: boolean;
  selectedLanguage: Language;
};

const initialState: InitialState = {
  isNavShown: false,
  isActionRejected: false,
  selectedLanguage: Language.English,
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
    setActionRejected(state, action) {
      state.isActionRejected = action.payload;
    },
    changeLanguage(state, action) {
      state.selectedLanguage = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
