export interface DailyWeatherForecast {
    dayForecast: IDayForecast
    hourForecasts: IHourForecast[],
}

export interface IDayForecast {
    date:string,
    averageTemp: number,
    averageFeelsLike: number,
    averageHumidity: number,
    minTemp: number,
    maxTemp: number,
    averageCloudiness: number
    averageRainProbability: number
}

export interface IWeatherResponseData
 {
    city: {
        name: string,
        country: string,
        sunrise: number, // time of sunrise in UNIX
        sunset: number // time of sunrise in UNIX
        [otherKey: string]: any
    },
    list: IHourForecast[],
    [otherKey:string]: any
}

export interface IHourForecast {
    dt_txt: string // time of data forecasted, ISO, UTC 
    main: {
        temp: number // Temperature
        feels_like: number, // This temperature parameter accounts for the human perception of weather.
        temp_min: number // Minimum temperature at the moment of calculation.
        temp_max: number, // Maximum temperature at the moment of calculation. 
        pressure: number, // Atmospheric pressure on the sea level by default,
        grnd_level: number, // Atmospheric pressure on the ground level,
        humidity: number, // Humidity %
        [otherKey: string]: any
    },
    weather: { // array which only has 1 element- a weather description object
        main: string // Group of weather parameters (Rain, Snow, Extreme etc.),
        description?: string // Additional weather description
        [otherKey: string]: any
    }[],
    wind: {
        speed: number // Wind speed. Unit Default: meter/sec, Metric: meter/sec,
        deg: number // Wind direction, degrees (meteorological)
        [otherKey: string]: any
    },
    clouds: {
        all: number
    },
    pop: number // Probability of raininng (number from 0 to 1)
    [otherKey: string]: any
}