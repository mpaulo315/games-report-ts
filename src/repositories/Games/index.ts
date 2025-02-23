import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;
const ENDPOINT = "/games";

export const getGames = async () => {
  const url = `${API_BASE_URL}${ENDPOINT}`;
  const response = await axios.get(url);
  return response.data;
};

export const countGames = async () => {
  const url = `${API_BASE_URL}${ENDPOINT}/count`;
  const response = await axios.get(url);
  return response.data;
};
