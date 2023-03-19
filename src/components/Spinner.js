import { SpinnerDiamond } from "spinners-react";
import Box from '@mui/material/Box';

export default function Spinner({ isLoading }) {

    return (
        <Box style={{ height: `${isLoading ? "100vh" : ""}`, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <SpinnerDiamond enabled={isLoading} speed={200} size={120} color="blue" />
        </Box>
    );
}


