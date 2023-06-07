import axios from "axios";

export const instanceNoFile = axios.create({
  baseURL: "https://shillshare.onrender.com/api/",
  withCredentials: true,
});

export const instanceFile = axios.create({
  baseURL: "https://shillshare.onrender.com/api/",
  headers: {
    "Content-Type": "multipart/form-data",
  },
  withCredentials: true,
});
