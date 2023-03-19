import Axios from 'axios'
import { SERVER_URL, BASE_ROUTE } from '../constants';

Axios.defaults.baseURL = SERVER_URL;

export const getAllCountriesInAsia = async () => {
    try {
        const res = await Axios.get(`/${BASE_ROUTE.COUNTRIES.GETALLCOUNTRIES}`)
        return res.data;
    } catch (err) {
        return null;
    }
}
export const getCountryByName = async (name) => {
    try {
        const res = await Axios.get(`/${BASE_ROUTE.COUNTRIES.GETCOUNTRYBYNAME}?name=${name}`)
        return res.data
    } catch (err) {
        return null;
    }
} 