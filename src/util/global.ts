import axios from "axios";

export const URL: string = "";
export const axiosInstance = axios.create({
  baseURL: URL,
});

// export const cache = new NodeCache({ stdTTL: 300 });