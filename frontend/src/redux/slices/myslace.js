import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

    // Initial state
    const initialState = {
      username:"admin",
      password:"1234",
    };

export const myslace = createSlice({
  name: "loginform",
  initialState,
    reducers: {


    },
});

// export const { setInputValues, validateForm, resetForm } = myslace.actions;
export default myslace.reducer;
export {initialState};
