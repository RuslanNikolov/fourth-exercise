import React from 'react';
import ForecastTable from './ForecastTable/ForecastTable'
import './App.scss';
import ErrorBoundary from './ErrorBoundary'
import SeachInput from './SearchInput/SearchInput';
import { useGetWeatherForecasts } from './Hooks/useGetWeatherForecasts'
import {Container, Box, Typography} from '@mui/material';
import UserPositionWidget from './UserPositionWidget/UserPositionWidget';

const App = () => {
  const [dailyForecasts, currentCity, setCurrentCity] = useGetWeatherForecasts()

  return (
    <ErrorBoundary>
      <Container className="app-container" >
        <Box className="page-header-wrapper">
          <Typography variant="h4" className="city-header">{currentCity}</Typography>
          <SeachInput setCurrentCity={setCurrentCity} />
        </Box>
        <ForecastTable currentCity={currentCity} dailyForecasts={dailyForecasts} />
        <UserPositionWidget />
      </Container>
    </ErrorBoundary>
  );
}

export default App;
