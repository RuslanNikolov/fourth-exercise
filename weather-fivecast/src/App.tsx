import React from 'react';
import ForecastTable from './ForecastTable/ForecastTable'
import './App.scss';
import ErrorBoundary from './ErrorBoundary'
import SeachInput from './SearchInput/SearchInput';
import { useGetWeatherForecasts } from './useGetWeatherForecasts'
import * as MUI from '@mui/material';

const App = () => {
  const [dailyForecasts, currentCity, setCurrentCity] = useGetWeatherForecasts()

  return (
    <ErrorBoundary>
      <MUI.Container style={{ paddingTop: '100px', backgroundColor: 'lavender', height: '100vh', border: 'dodgerblue 4px solid' }}>
        <MUI.Box style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <h2 className="city-header">{currentCity}</h2>
          <SeachInput setCurrentCity={setCurrentCity} />
        </MUI.Box>
        <ForecastTable currentCity={currentCity} dailyForecasts={dailyForecasts} />
      </MUI.Container>
    </ErrorBoundary>
  );
}

export default App;
