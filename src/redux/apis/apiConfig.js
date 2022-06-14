import axios from "axios";
import { ROOT_URL } from "../constants";

export const apiClient = axios.create({
  baseURL: ROOT_URL,
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});
