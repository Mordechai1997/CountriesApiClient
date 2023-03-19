import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

export default function SelectInput({ list, handleChangeSelect, defaultValue }) {

    const [value, setVlue] = useState(defaultValue);

    return (
        <Box className="select-input">
            <FormControl fullWidth>
                <Select
                    value={value}
                    onChange={(e) => handleChangeSelect && handleChangeSelect(e.target.value)}
                >
                    {
                        list.map((item, index) => (
                            <MenuItem value={item?.name} key={index}>
                                {item?.name}
                            </MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </Box>
    );
}
