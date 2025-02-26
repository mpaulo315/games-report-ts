import axios from "axios"

const API_BASE_URL = import.meta.env.VITE_API_URL;
const ENDPOINTs = {
    releaseDateRange: "/filters/release_date/range"
};

type ReleaseDateRange = {
    start_date: number,
    end_date: number
}
export const getReleaseDateRange = async () : Promise<ReleaseDateRange> => {
    const url = `${API_BASE_URL}${ENDPOINTs.releaseDateRange}`;
    const response = await axios.get<ReleaseDateRange>(url)  
    return response.data;
}