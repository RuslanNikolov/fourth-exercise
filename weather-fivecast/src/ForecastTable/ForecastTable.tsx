import React from 'react';
import HourlyTable from './HourlyTable/HourlyTable';
import * as MUI from '@mui/material';
import * as IconsMUI from '@mui/icons-material';
import { DailyWeatherForecast, IHourForecast } from '../types'
import './ForecastTable.scss';
import TableRow from './TableRow/TableRow';
// const HourlyTable = React.lazy(() => import('./HourlyTable/HourlyTable'));

interface IForecastTableProps {
  currentCity: string,
  dailyForecasts: DailyWeatherForecast[]
}

const ForecastTable = (props: IForecastTableProps) => {

  return (
    <MUI.TableContainer component={MUI.Paper}>
      <MUI.Table aria-label="collapsible table">
        <MUI.TableHead >
          <MUI.TableRow className="table-head-row">
            <MUI.TableCell />
            <MUI.TableCell><MUI.Typography variant="h3" style={{textAlign:'center', color: 'green'}}>&#9774;</MUI.Typography></MUI.TableCell>
            <MUI.TableCell>Temperature</MUI.TableCell>
            <MUI.TableCell>Feels like</MUI.TableCell>
            <MUI.TableCell>Minimium Temp</MUI.TableCell>
            <MUI.TableCell>Maximum Temp</MUI.TableCell>
            <MUI.TableCell>Humidity</MUI.TableCell>
            <MUI.TableCell>Cloudiness</MUI.TableCell>
            <MUI.TableCell>Rain probability</MUI.TableCell>
          </MUI.TableRow>
        </MUI.TableHead>
        <MUI.TableBody>
          {props.dailyForecasts.map(
            (dailyForecast: DailyWeatherForecast) => <TableRow dailyForecast={dailyForecast} />
          )}
        </MUI.TableBody>
      </MUI.Table>
    </MUI.TableContainer>
  );
}

export default ForecastTable;
