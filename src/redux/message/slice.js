import { createSlice } from "@reduxjs/toolkit";
import { messageThunk, sendMessageThunk } from "./operations";

const initialState = {
  message: [],
  lastMessage: null,
};

const slice = createSlice({
  name: "message",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(messageThunk.fulfilled, (state, action) => {
        state.message = action.payload;
      })
      .addCase(sendMessageThunk.fulfilled, (state, action) => {
        state.lastMessage = action.payload;
      });
  },
});

export const messageReducer = slice.reducer;
