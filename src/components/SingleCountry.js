import Box from '@mui/material/Box';

export default function SingleCountry({ item }) {
    return (
        <Box className="single-country" >
            <Box className="single-country-text">
                <p>name : {item?.name}</p>
                <p>capital :  {item?.capital}</p>
            </Box>
            <img className="single-country-box-img" alt="country" src={item.flags?.png} />
        </Box>
    );
}
