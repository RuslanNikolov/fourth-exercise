import React from 'react';
import { TableContainer, Table, TableBody, TableHead, TableRow as MUITableRow, TableCell, Typography,Paper } from '@mui/material';
import { DailyWeatherForecast } from '../types'
import './ForecastTableStyles.ts';
import TableRow from './TableRow/TableRow';
import * as styles from './ForecastTableStyles';

interface IForecastTableProps {
  currentCity: string,
  dailyForecasts: DailyWeatherForecast[]
}

const ForecastTable = (props: IForecastTableProps) => {

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table" /* better red by screen readers */ >
        <TableHead >
          <MUITableRow sx={styles.tableHeadRow}>
            <TableCell />
            <TableCell>
              <Typography style={{ textAlign: "center", color: "green" }} variant="h3" >&#9774;</Typography>
            </TableCell>
            <TableCell>Temperature</TableCell>
            <TableCell>Feels like</TableCell>
            <TableCell>Minimium Temp</TableCell>
            <TableCell>Maximum Temp</TableCell>
            <TableCell>Humidity</TableCell>
            <TableCell>Cloudiness</TableCell>
            <TableCell>Rain probability</TableCell>
          </MUITableRow>
        </TableHead>

        <TableBody>
          {props.dailyForecasts.map(
            (dailyForecast: DailyWeatherForecast) => (
              <TableRow
                key={dailyForecast.hourForecasts[0].dt_txt} // an unique key on the map iteratior is a fundamental optimising tool
                dailyForecast={dailyForecast}
              />
            ))}
        </TableBody>
      </Table>
    </TableContainer >
  );
}

export default ForecastTable;
