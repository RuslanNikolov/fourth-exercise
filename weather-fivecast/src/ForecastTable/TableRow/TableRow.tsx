import React from 'react';
import * as MUI from '@mui/material';
import * as IconsMUI from '@mui/icons-material';
import { DailyWeatherForecast, IHourForecast } from '../../types';

interface ITableRowProps {
  dailyForecast: DailyWeatherForecast
}

const TableRow = (props: ITableRowProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <MUI.TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <MUI.TableCell>
          <MUI.IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <IconsMUI.KeyboardArrowUp /> : <IconsMUI.KeyboardArrowDown />}
          </MUI.IconButton>
        </MUI.TableCell>
        <MUI.TableCell className="date-cell" component="th" scope="row">
          <strong>{props.dailyForecast.dayForecast.date}</strong>
        </MUI.TableCell>
        <MUI.TableCell>{props.dailyForecast.dayForecast.averageTemp}°</MUI.TableCell>
        <MUI.TableCell>{props.dailyForecast.dayForecast.averageFeelsLike}°</MUI.TableCell>
        <MUI.TableCell>{props.dailyForecast.dayForecast.minTemp}°</MUI.TableCell>
        <MUI.TableCell>{props.dailyForecast.dayForecast.maxTemp}°</MUI.TableCell>
        <MUI.TableCell>{props.dailyForecast.dayForecast.averageHumidity}</MUI.TableCell>
        <MUI.TableCell>{props.dailyForecast.dayForecast.averageCloudiness}</MUI.TableCell>
        <MUI.TableCell>{props.dailyForecast.dayForecast.averageRainProbability * 100}%</MUI.TableCell>
      </MUI.TableRow>
      <MUI.TableRow>
        <MUI.TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <MUI.Collapse in={open} timeout="auto" unmountOnExit>
            <MUI.Box style={{ margin: 1 }}>
              <MUI.Typography variant="h6" gutterBottom component="div">
                Hourly details
              </MUI.Typography>
              <MUI.Table size="small" aria-label="purchases">
                <MUI.TableHead>
                  <MUI.TableRow>
                    <MUI.TableCell />
                    <MUI.TableCell>Temperature</MUI.TableCell>
                    <MUI.TableCell>Feels like</MUI.TableCell>
                    <MUI.TableCell>Atmospheric pressure</MUI.TableCell>
                    <MUI.TableCell>Humidity</MUI.TableCell>
                    <MUI.TableCell>Weather</MUI.TableCell>
                    <MUI.TableCell>Windspeed</MUI.TableCell>
                  </MUI.TableRow>
                </MUI.TableHead>
                <MUI.TableBody>
                  {props.dailyForecast.hourForecasts.map((hourForecast: IHourForecast) => (
                    <MUI.TableRow key={hourForecast.dt_txt}>
                      <MUI.TableCell component="th" scope="row">
                        {hourForecast.dt_txt.split(' ')[1]}
                      </MUI.TableCell>
                      <MUI.TableCell>{hourForecast.main.temp}</MUI.TableCell>
                      <MUI.TableCell>{hourForecast.main.feels_like}</MUI.TableCell>
                      <MUI.TableCell>{hourForecast.main.pressure}</MUI.TableCell>
                      <MUI.TableCell>{hourForecast.main.humidity}</MUI.TableCell>
                      <MUI.TableCell>{hourForecast.weather[0].main}</MUI.TableCell>
                      <MUI.TableCell>{hourForecast.wind.speed}</MUI.TableCell>
                    </MUI.TableRow>
                  ))}
                </MUI.TableBody>
              </MUI.Table>
            </MUI.Box>
          </MUI.Collapse>
        </MUI.TableCell>
      </MUI.TableRow>
    </React.Fragment>
  );
}

export default TableRow;


