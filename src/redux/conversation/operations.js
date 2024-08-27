import { createAsyncThunk } from "@reduxjs/toolkit";
import { chatApi, setAuthHeader } from "../../config/chatApi";

export const conversationThunk = createAsyncThunk(
  "conversation",
  async (id, thunkApi) => {
    try {
      const { data } = await chatApi.get(`/conversations/${id}`);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const userConversationThunk = createAsyncThunk(
  "userConversation",
  async (id, thunkApi) => {
    const { auth } = thunkApi.getState();

    if (!auth.token) {
      return thunkApi.rejectWithValue("Not found token");
    }
    try {
      setAuthHeader(auth.token);
      const { data } = await chatApi.get(`auth/${id}`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
