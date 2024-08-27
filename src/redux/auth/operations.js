import { createAsyncThunk } from "@reduxjs/toolkit";
import { chatApi, clearAuthHeder, setAuthHeader } from "../../config/chatApi";
import { allUsersThunk } from "../conversation/operations";

export const registerThunk = createAsyncThunk(
  "register",
  async (credentials, thunkApi) => {
    try {
      const { data } = await chatApi.post("auth/signup", credentials);

      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "login",
  async (credentials, thunkApi) => {
    try {
      const { data } = await chatApi.post("/auth/signin", credentials);
      setAuthHeader(data.token);
      thunkApi.dispatch(refreshThunk());
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const logoutThunk = createAsyncThunk(
  "/auth/signout",
  async (_, thunkApi) => {
    const { auth } = thunkApi.getState();
    if (!auth.token) {
      return thunkApi.rejectWithValue("Not found token");
    }
    try {
      setAuthHeader(auth.token);
      await chatApi.post("/auth/signout");
      clearAuthHeder();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  "/auth/current",
  async (_, thunkApi) => {
    const { auth } = thunkApi.getState();

    if (!auth.token) {
      return thunkApi.rejectWithValue("Not found token");
    }
    try {
      setAuthHeader(auth.token);
      const { data } = await chatApi.get("/auth/current");
      thunkApi.dispatch(allUsersThunk());
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
