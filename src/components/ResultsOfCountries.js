import SingleCountry from "./SingleCountry";
import Spinner from "./Spinner";
import Box from '@mui/material/Box';

export default function ResultsOfCountries({ list, handleClickOfItems }) {

    return (
        <Box>
            {
                list ?
                    list.map((item, index) => (
                        <Box key={index} onClick={() => handleClickOfItems(item.name)}>
                            <SingleCountry item={item} />
                        </Box>
                    )) : <Spinner isLoading={true} />
            }
        </Box>
    );
}
