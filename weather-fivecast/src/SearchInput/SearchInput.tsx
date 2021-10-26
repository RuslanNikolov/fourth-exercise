import { memo, useState, ChangeEvent } from 'react';
import { Box, TextField, Button } from '@mui/material';

interface ISearchInputProps {
    setCurrentCity: (city: string) => void
}

// react memo helps to not rerender the component (compares props and state), if his parent rerendered for some reason
const SearchInput = memo(({ setCurrentCity }: ISearchInputProps) => {
    const [cityInput, setCityInput] = useState('');

    return (
        <Box style={{ display: 'flex', alignItems: 'center' } /* Short inline styles enhance readability*/}>
            <TextField
                id={'SearchInput'}
                autoFocus={true}
                className={'SearchInput'}
                label={'City'}
                placeholder={'Narnia is not a real place...'}
                type={"text"}
                aria-describedby="city-input"
                value={cityInput}
                style={{ marginRight: '20px' }}
                onChange={(event: ChangeEvent<HTMLInputElement>) => { setCityInput(event.currentTarget.value); }}
            />
            <Button variant="contained" className="submit-button" onClick={() => { setCurrentCity(cityInput); setCityInput('') }}>Let's go!</Button>
        </Box>

    )
});


export default SearchInput;
