import React from 'react';
import enzyme from 'enzyme';
import TableRow from './TableRow';
import { DailyWeatherForecast, IHourForecast } from '../../types'
import toJson from 'enzyme-to-json';
import {dailyForecastsMock} from '../ForecastTable.spec';

it('renders correctly', () => {
    const component = enzyme.shallow(<TableRow dailyForecast={dailyForecastsMock[0]} />);
    expect(toJson(component)).toMatchSnapshot();
});