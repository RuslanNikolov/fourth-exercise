import React from 'react';
import renderer from 'react-test-renderer';
import enzyme from 'enzyme';
import ForecastTable from './ForecastTable';
import { DailyWeatherForecast } from '../types'
import toJson from 'enzyme-to-json';

export const dailyForecastsMock: DailyWeatherForecast[] = [{
    dayForecast: {
        averageCloudiness: 34,
        averageFeelsLike: 12,
        averageHumidity: 84,
        averageRainProbability: 0,
        averageTemp: 12,
        date: "2021-10-26",
        maxTemp: 13,
        minTemp: 12
    },
    hourForecasts: [{
        clouds: { all: 56 },
        dt_txt: "2021-10-26 12:00:00",
        main: {
            feels_like: 11.93,
            grnd_level: 1017,
            humidity: 87,
            pressure: 1018,
            sea_level: 1018,
            temp: 12.37,
            temp_kf: -0.55,
            temp_max: 12.92,
            temp_min: 12.37,
        },
        pop: 0,
        visibility: 10000,
        weather: [{ main: 'Clouds' }],
        wind: {
            speed: 2.09, deg: 2
        }
    }, {
        clouds: { all: 12 },
        dt_txt: "2021-10-27 12:00:00",
        main: {
            feels_like: 11.98,
            grnd_level: 1018,
            humidity: 80,
            pressure: 1018,
            sea_level: 1018,
            temp: 12.38,
            temp_kf: -0.58,
            temp_max: 12.92,
            temp_min: 12.37,
        },
        pop: 0.4,
        visibility: 10000,
        weather: [{ main: 'Rain' }],
        wind: {
            speed: 2.12, deg: 1
        }
    }]
}]

it('renders correctly', () => {
    const component = enzyme.shallow(<ForecastTable currentCity={'Tokyo'} dailyForecasts={dailyForecastsMock} />);
    expect(toJson(component)).toMatchSnapshot();
});