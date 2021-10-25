import React, { ChangeEvent, SyntheticEvent } from 'react';
import './SearchInput.scss';
import * as MUI from '@mui/material';

interface ISearchInputProps {
    setCurrentCity: (city: string) => void
}

const SearchInput = ({ setCurrentCity }: ISearchInputProps) => {
    const [cityInput, setCityInput] = React.useState('');

    return (
        <MUI.Box style
={{display: 'flex', alignItems: 'center'}}>
            <MUI.TextField
                id={'SearchInput'}
                autoFocus={true}
                className={'SearchInput'}
                label={'City'}
                placeholder={'Narnia is not a real place...'}
                type={"text"}
                aria-describedby="city-input"
                value={cityInput}
                style
={{marginRight:'20px'}}
                onChange={(event: ChangeEvent<HTMLInputElement>) => { setCityInput(event.currentTarget.value); }}
            />
            <MUI.Button variant="contained" onClick={() => {setCurrentCity(cityInput); setCityInput('')}}>Let's go!</MUI.Button>
        </MUI.Box>

    )
};


export default React.memo(SearchInput);
