import { useCallback, useEffect, useState } from 'react';
import {
    IWeatherResponseData
    , DailyWeatherForecast, IHourForecast, IDayForecast
} from '../types';
import APIConfig from '../APIConfig';
import axios, { AxiosResponse } from 'axios';

export const useGetWeatherForecasts = (): [DailyWeatherForecast[], string, (city: string) => void | never] => {
    // we start the user journey with showing the weather in the land of groovy hippies and life hacking programmers
    const [currentCity, setCurrentCity] = useState<string>('San Francisco');
    const [dailyWeatherForecasts, setDailyWeatherForecasts] = useState<DailyWeatherForecast[]>([] as DailyWeatherForecast[])

    // we change the forecasts on every city change
    useEffect(() => {
        fetchForecasts(currentCity);
    }, [currentCity])

    const fetchForecasts = async (city: string) => {
        setCurrentCity(city)
        const weatherResponseData = await fetchWeatherData(city);
        const dailyWeatherForecasts = extractDailyForecasts(weatherResponseData);
        setDailyWeatherForecasts(dailyWeatherForecasts)
    }

    const fetchWeatherData = useCallback(async (city: string): Promise<IWeatherResponseData | never> => {
        const fiveDaysThreeHourURL = `${APIConfig.fiveDaysThreeHourUrl}?q=${city}&appid=${APIConfig.openWeatherAppID}&units=metric`
        let weatherResponseData: any;
        try {
            const response: AxiosResponse = await axios.get(fiveDaysThreeHourURL);
            weatherResponseData = response.data as IWeatherResponseData;
        } catch (err: unknown) {
            handleError(err);
        }

        return weatherResponseData;
    }, [])

    const handleError = useCallback((err: unknown) => {
        if (err instanceof TypeError) {
            throw new TypeError('TypeError | Someone isn\'t who you thought he was!' + (err as any).message)
        } else if (err instanceof RangeError) {
            throw new RangeError('Range Error | Someone got too big for their own shoes!' + (err as any).message)
        } else if (err instanceof SyntaxError) {
            throw new SyntaxError('Syntax Error | Somebody skipped grammar classes!' + (err as any).message)
        } else if (err instanceof AggregateError) {
            throw new AggregateError(`AggegateError | Here we see acumulation of the same bad life choices` + (err as any).message)
        } else {
            throw new Error((err as any).message + ' Fetching error')
        }
    }, [])

    const extractDailyForecasts = useCallback((weatherResponseData: IWeatherResponseData): DailyWeatherForecast[] => {
        // we start to create our daily forecasts which we will use in our forecast table
        const dailyForecasts: DailyWeatherForecast[] = [];
        const hourListCopy = [...weatherResponseData.list];

        while (hourListCopy.length > 0) {
            // we actually relocate groups of 8 hourForecasts from the list, to our hourForecasts in a dailyForecast obj, until list is exhausted
            const dailyForecast: DailyWeatherForecast = {
                hourForecasts: hourListCopy.splice(0, 8) as IHourForecast[],
                dayForecast: {} as IDayForecast
            }

            // we aggregate a help data object for the day forecast
            const dayForecastData = dailyForecast.hourForecasts.reduce(
                (dayForecastData: { [key: string]: any }, nextHourForecast: IHourForecast) => ({
                    tempMin: (nextHourForecast.main.temp_min < dayForecastData.tempMin) ? nextHourForecast.main.temp_min : dayForecastData.tempMin,
                    tempMax: (nextHourForecast.main.temp_max > dayForecastData.tempMax) ? nextHourForecast.main.temp_max : dayForecastData.tempMax,
                    tempSum: dayForecastData.tempSum + nextHourForecast.main.temp,
                    feelsLikeSum: dayForecastData.feelsLikeSum + nextHourForecast.main.feels_like,
                    humiditySum: dayForecastData.humiditySum + nextHourForecast.main.humidity,
                    cloudinessSum: dayForecastData.cloudinessSum + nextHourForecast.clouds.all,
                    rainProbabilitySum: dayForecastData.rainProbabilitySum + nextHourForecast.pop
                }),
                { tempMin: +Infinity, tempMax: -Infinity, tempSum: 0, feelsLikeSum: 0, humiditySum: 0, cloudinessSum: 0, rainProbabilitySum: 0 }
            );

            // we get the date from the date of the first hour forecast
            const date = dailyForecast.hourForecasts[0].dt_txt.split(' ')[0];
            const numberOfForecastsByHour = dailyForecast.hourForecasts.length;

            dailyForecast.dayForecast = {
                date,
                minTemp: Math.round(dayForecastData.tempMin),
                maxTemp: Math.round(dayForecastData.tempMax),
                averageTemp: Math.round(dayForecastData.tempSum / numberOfForecastsByHour),
                averageFeelsLike: Math.round(dayForecastData.feelsLikeSum / numberOfForecastsByHour),
                averageHumidity: Math.round(dayForecastData.humiditySum / numberOfForecastsByHour),
                averageCloudiness: Math.round(dayForecastData.cloudinessSum / numberOfForecastsByHour),
                averageRainProbability: Math.round(dayForecastData.rainProbabilitySum / numberOfForecastsByHour)
            }

            dailyForecasts.push(dailyForecast);
        }

        return dailyForecasts;
    }, [])

    return [dailyWeatherForecasts, currentCity, fetchForecasts]
}