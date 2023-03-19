import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAllCountriesInAsia from "../../customHooks/useAllCountriesInAsia";
import ResultsOfCountries from "../ResultsOfCountries";
import SelectInput from "../SelectInput";
import Spinner from "../Spinner";
import TextInput from "../TextInput";
import Box from '@mui/material/Box';
import './CountrySearchPage.css';


export default function CountrySearchPage() {
    const allCountries = useAllCountriesInAsia();
    const [textSearch, setTextSearch] = useState('');
    const [selectValue, setSelectValue] = useState(allCountries ? allCountries[0].name : '');
    const [countriesBySearch, setCountriesBySearch] = useState([])
    const navigate = useNavigate();

    const ProductsBySearch = (v) => {
        if (allCountries && v) {
            const newList = allCountries.filter(item => item.name.includes(v.charAt(0).toUpperCase() + v.slice(1)) || item.name.includes(v));
            setCountriesBySearch(newList)
        } else {
            setCountriesBySearch([])
        }
    }
    const debounce = (func, timeout = 300) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
            }, timeout);
        };
    }
    const debouncedChangeHandler = useCallback(
        debounce(ProductsBySearch, 300)
        , [allCountries]);

    const handleChangeSearch = (v) => {
        setTextSearch(v)
        debouncedChangeHandler(v);
    }
    const navigateToCantryPage = (name) => {
        setSelectValue(name)
        const item = allCountries.find(i => i.name === name)
        navigate(`/country?name=${item.name}`, { state: item });
    }
    return (
        <Box className="form-select-input-and-text-input">
            {allCountries ?
                <>
                    <TextInput text={textSearch} setText={handleChangeSearch} />
                    <SelectInput list={allCountries} handleChangeSelect={navigateToCantryPage} defaultValue={selectValue} />
                    <ResultsOfCountries list={countriesBySearch} handleClickOfItems={navigateToCantryPage} />

                </> : <Spinner isLoading={true} />
            }
        </Box>
    );
}
