import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN; // For import .env file variables

const headers = {
    Authorization: "bearer " + TMDB_TOKEN
}

export const fetchDataFromApi = async (url, params) => {

    try {
        // you know when we call api the data in api comes in data property so we destructure first
        const { data } = await axios.get(`${BASE_URL}${url}`, {
            headers: headers,
            params: params
        })
        return data;

    } catch (error) {
        console.log("Error: " + error)
        return error;
    }

}