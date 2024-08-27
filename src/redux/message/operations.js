import { createAsyncThunk } from "@reduxjs/toolkit";
import { chatApi } from "../../config/chatApi";

export const messageThunk = createAsyncThunk(
  "message",
  async (id, thunkApi) => {
    try {
      const { data } = await chatApi.get(`/message/${id}`);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const sendMessageThunk = createAsyncThunk(
  "sendMessage",
  async (message, thunkApi) => {
    try {
      const { data } = await chatApi.post("/message", message);
      thunkApi.dispatch(messageThunk(message.conversationId));
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
