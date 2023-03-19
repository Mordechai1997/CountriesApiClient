import { useEffect } from "react";
import { getAllCountriesInAsia } from "../services/ApiServices";
import { useSelector, useDispatch } from "react-redux";
import { setAllCountries } from "../countriesSlice";

export default function useAllCountriesInAsia() {
    const countriesInAsia = useSelector((state) => state.initCountries.allCountries);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!countriesInAsia) {
            initAllCountries();
        }
    }, [])

    const initAllCountries = async () => {
        const data = await getAllCountriesInAsia();
        if (data) {
            dispatch(setAllCountries(data));
        }
    }

    return countriesInAsia;
}
