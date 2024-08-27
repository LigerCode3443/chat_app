import { createSlice } from "@reduxjs/toolkit";
import { conversationThunk, userConversationThunk } from "./operations";

const initialState = {
  conversation: [],
  user: null,
};

const slice = createSlice({
  name: "conversation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(conversationThunk.fulfilled, (state, action) => {
        state.conversation = action.payload;
      })
      .addCase(userConversationThunk.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const conversationReducer = slice.reducer;
