import axios from "axios";

export const chatApi = axios.create({
  baseURL: "https://cha-api-qua6.onrender.com/api/",
});

export const setAuthHeader = (token) => {
  chatApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearAuthHeder = () => {
  chatApi.defaults.headers.common.Authorization = ``;
};
