import axios from "axios"

const API_BASE_URL = import.meta.env.VITE_API_URL;
const ENDPOINTs = {
    releaseDateRange: "/filters/release_date/range",
    publishers: "/filters/publishers",
    genres: "/filters/genres",
    developers: "/filters/developers"
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

export const getPublishers = async () : Promise<(string|undefined)[]> => {
    const url = `${API_BASE_URL}${ENDPOINTs.publishers}`;
    const response = await axios.get<(string| undefined)[]>(url)
    return response.data;
}

export const getDevelopers = async () : Promise<(string|undefined)[]> => {
    const url = `${API_BASE_URL}${ENDPOINTs.developers}`;
    const response = await axios.get<(string| undefined)[]>(url)
    return response.data;
}

export const getGenres = async () : Promise<string[]> => {
    const url = `${API_BASE_URL}${ENDPOINTs.genres}`;
    const response = await axios.get<string[]>(url)
    return response.data;
}