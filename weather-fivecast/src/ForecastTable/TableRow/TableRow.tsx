import React from 'react';
// we cannot do something like import * as MUI from @mui.. because that will import too much stuff
import { TableRow as MUITableRow, TableCell, Typography, IconButton, Collapse, Box, Table, TableHead, TableBody } from '@mui/material';
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import { DailyWeatherForecast, IHourForecast } from '../../types';
import * as styles from './TableRowStyles';

interface ITableRowProps {
  dailyForecast: DailyWeatherForecast
}

const TableRow = (props: ITableRowProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <MUITableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="caption">BY HOURS</Typography>
          <IconButton style={styles.dateCell} aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell className="date-cell" component="th" scope="row">
          <strong>{props.dailyForecast.dayForecast.date}</strong>
        </TableCell>
        <TableCell>{props.dailyForecast.dayForecast.averageTemp}°</TableCell>
        <TableCell>{props.dailyForecast.dayForecast.averageFeelsLike}°</TableCell>
        <TableCell>{props.dailyForecast.dayForecast.minTemp}°</TableCell>
        <TableCell>{props.dailyForecast.dayForecast.maxTemp}°</TableCell>
        <TableCell>{props.dailyForecast.dayForecast.averageHumidity}</TableCell>
        <TableCell>{props.dailyForecast.dayForecast.averageCloudiness}</TableCell>
        <TableCell>{props.dailyForecast.dayForecast.averageRainProbability * 100}%</TableCell>
      </MUITableRow>

      <MUITableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box style={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Hourly details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <MUITableRow>
                    <TableCell />
                    <TableCell>Temperature</TableCell>
                    <TableCell>Feels like</TableCell>
                    <TableCell>Atmospheric pressure</TableCell>
                    <TableCell>Humidity</TableCell>
                    <TableCell>Weather</TableCell>
                    <TableCell>Windspeed</TableCell>
                  </MUITableRow>
                </TableHead>
                <TableBody>
                  {props.dailyForecast.hourForecasts.map((hourForecast: IHourForecast) => (
                    <MUITableRow key={hourForecast.dt_txt}>
                      <TableCell component="th" scope="row">
                        {hourForecast.dt_txt.split(' ')[1]}
                      </TableCell>
                      <TableCell>{hourForecast.main.temp}</TableCell>
                      <TableCell>{hourForecast.main.feels_like}</TableCell>
                      <TableCell>{hourForecast.main.pressure}</TableCell>
                      <TableCell>{hourForecast.main.humidity}</TableCell>
                      <TableCell>{hourForecast.weather[0].main}</TableCell>
                      <TableCell>{hourForecast.wind.speed}</TableCell>
                    </MUITableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </MUITableRow>
    </React.Fragment>
  );
}

export default TableRow;


