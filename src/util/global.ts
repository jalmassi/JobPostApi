import axios from "axios";

export const URL: string = "";
export const axiosInstance = axios.create({
  baseURL: URL,
});
