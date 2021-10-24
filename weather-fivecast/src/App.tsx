import React, { ErrorInfo } from 'react';
import ForecastTable from './ForecastTable/ForecastTable'
import './App.scss';
import axios, { AxiosResponse } from 'axios';
import ErrorBoundary from './ErrorBoundary'
import SeachInput from './SearchInput/SearchInput';
import APIConfig from './APIConfig';


interface IWeatherData {
  city: {
    coordinates: {
      latitude: string,
      longtitute: string,
      country: string,
      name: string,
      sunrise: number
    },
    list: IDetailsByHour[]
  }
}

interface IDetailsByHour {
  main: {
    temp: number // Temperature
    feels_like: number, // This temperature parameter accounts for the human perception of weather.
    temp_min: number // Minimum temperature at the moment of calculation.
    temp_max: number, // Maximum temperature at the moment of calculation. 
    pressure: number, // Atmospheric pressure on the sea level by default,
    grnd_level: number, // Atmospheric pressure on the ground level,
    humidity: number, // Humidity %
  },
  rain: {
    '3h': number
  }
}


const App = () => {
  const [currentWeatherData, setCurrentWeatherData] = React.useState<IWeatherData | {}>({});
  console.log('data', currentWeatherData)
  // we start the user journey with showing the weather in the land of groovy hippies and life hacking programmers
  React.useEffect(() => {
    replaceCurrentWeatherData({ city: 'San Francisco' });
  }, [])

  const replaceCurrentWeatherData = React.useCallback(async ({ city }: { city: string }): Promise<void> => {
    const cityAPIUrl =
      `${APIConfig.baseUrl}?q=${city}&appid=${APIConfig.openWeatherAppID}&units=metric`

    try {
      const openWeatherResponse: AxiosResponse = await axios.get(cityAPIUrl);
      const fetchedWeatherData = openWeatherResponse.data as IWeatherData;
      setCurrentWeatherData(fetchedWeatherData);
    } catch (err: unknown) {
      throw new Error(`Error with fetching data: ${(err as Error).message}`)
    }
  }, [])

  return (
    <div className="App">
      <SeachInput replaceCurrentWeatherData={replaceCurrentWeatherData} />
      <ErrorBoundary>
        {JSON.stringify(currentWeatherData)}
        <ForecastTable />
      </ErrorBoundary>
    </div>
  );
}

export default App;
