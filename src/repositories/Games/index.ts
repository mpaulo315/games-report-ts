import axios from "axios";
import { Game} from "../../interfaces/games";

const API_BASE_URL = import.meta.env.VITE_API_URL;
const ENDPOINT = "/games";

export const getGames = async () : Promise<Game[]> => {
  const url = `${API_BASE_URL}${ENDPOINT}`;
  const response = await axios.get<Game[]>(url);    
  return response.data;
};

export const countGames = async () : Promise<number> => {
  const url = `${API_BASE_URL}${ENDPOINT}/count`;
  const response = await axios.get<number>(url);
  return response.data;
};
