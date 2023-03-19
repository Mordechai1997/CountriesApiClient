import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { getCountryByName } from "../../services/ApiServices";
import Spinner from "../Spinner";
import Box from '@mui/material/Box';
import './CountryDetailsPage.css';

export default function CountryDetailsPage() {
  const { state } = useLocation();
  const [searchParams] = useSearchParams();
  const [data, setData] = useState(state);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    initCountryData();
  }, [])

  const initCountryData = async () => {
    const name = searchParams.get("name");
    if (!data && name) {
      const item = await getCountryByName(name)
      if (item && item[0].name === name && item[0].region === "Asia")
        setData(item[0])
    }
    setIsLoading(false);
  }
  return (
    <Box className="country-details-page">
      {
        isLoading ? <Spinner isLoading={true} /> :
          <Box>
            <p>For further search <span className="back-btn" onClick={() => navigate('/')}>click here</span></p>
            {data ?
              <Box className="container-country-details">
                <Box className="container-country-details-text">
                  <Box className="country-details">
                    <span className="bold">name : </span><span>{data.name}</span>
                  </Box>
                  <Box className="country-details">
                    <span className="bold">capital : </span><span>{data.capital}</span>
                  </Box>
                  <Box className="country-details">
                    <span className="bold">currencies </span>
                    <Box className="currencies-details">
                      <p> code :  {data.currencies[0]?.code}</p>
                      <p> name:  {data.currencies[0]?.name}</p>
                      <p> symbol:  {data.currencies[0]?.symbol}</p>
                    </Box>
                  </Box>
                </Box>
                <img alt="country" src={data.flags?.png} />
              </Box> : <p>No results</p>}
          </Box>
      }
    </Box>

  );
}
