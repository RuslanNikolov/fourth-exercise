import { useGetWeatherForecasts } from './useGetWeatherForecasts';
import axios from 'axios'
import { dailyForecastsMock } from '../ForecastTable/ForecastTable.spec';
import { renderHook, act } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter'
import APIConfig from '../APIConfig';

const mock = new MockAdapter(axios);

const responseMock = {
    list: dailyForecastsMock[0].hourForecasts
};

describe('test hook', () => {
    it('fetch data and process it correctly', async () => {
        // Arrange
        mock.onGet(`${APIConfig.fiveDaysThreeHourUrl}?q=${'San Francisco'}&appid=${APIConfig.openWeatherAppID}&units=metric`)
            .reply(200, responseMock);

        // Act
        const { result, waitForNextUpdate, rerender , ...rest} = renderHook(() => useGetWeatherForecasts());
        await waitForNextUpdate();

        // Assert
        const weatherForecasts = result.current[0]
        expect(weatherForecasts).toEqual(dailyForecastsMock);
    })
})