import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCountries: null
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setAllCountries: (state, action) => {
      state.allCountries = action.payload;
    }
  }
});

export const { setAllCountries } = countriesSlice.actions;

export default countriesSlice.reducer;
