import { createSlice } from "@reduxjs/toolkit";
import {
  addConversationThunk,
  allUsersThunk,
  conversationThunk,
  userConversationThunk,
} from "./operations";

const initialState = {
  conversation: [],
  user: null,
  users: [],
  newConversation: null,
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
      })
      .addCase(allUsersThunk.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(addConversationThunk.fulfilled, (state, action) => {
        state.newConversation = action.payload;
      });
  },
});

export const conversationReducer = slice.reducer;
