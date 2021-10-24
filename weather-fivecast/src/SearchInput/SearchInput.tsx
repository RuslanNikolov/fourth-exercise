import React from 'react';
import './SearchInput.scss';

interface ISearchInputProps {
    replaceCurrentWeatherData: ({ city }: { city: string }) => Promise<void>
}

const SearchInput = ({ replaceCurrentWeatherData }: ISearchInputProps) => {

    return (
        <div className="SearchInput">
        </div>
    );
}

export default React.memo(SearchInput);
