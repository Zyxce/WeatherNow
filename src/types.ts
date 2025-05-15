export interface IWeatherData {
  today: {
    city: string
    country: string
    temperature: number
    feelsLike: number
    humidity: number
    wind: number
    sunrise: number
    sunset: number
    icon: string
    main: string
    pressure: number
    description: string
    uvIndex: number
    timeZone: number
  }
  forecast: IForecastDay[]
  forecast24h: IForecast24h[]
  moonPhases: IMoonPhaseData[]
}

export interface IWeatherState {
  data: IWeatherData | null
  loading: boolean
  error: string | null
}
//Today weather
export interface ITodayWeather {
  locationInfo: {
    city: string | null
    description: string | null
    temperature: number | null
  }
  weatherIcon: {
    icon: string
  }
  feelsLike: {
    feelsLike: number | null
  }
  humidityInfo: {
    humidity: number | null
  }
  windInfo: {
    wind: number | null
  }
}
export interface ITodayWeatherProps {
  arr: ITodayWeather
}

export interface ILocationInfoProps {
  city: string | null
  description: string | null
  temperature: number | null
}

export interface IWeatherIconProps {
  icon: string
}

export interface IFeelsLikeProps {
  feelsLike: number | null
}

export interface IHumidityInfoProps {
  humidity: number | null
}

export interface IWindInfoProps {
  wind: number | null
}
// AdditionalParams

export interface IAdditionalParams {
  sunInfoCard: {
    sunrise: number | null
    sunset: number | null
    timeZone: number | null
  }
  pressure: {
    pressure: number | null
  }
  uvIndex: {
    uvIndex: number | null
  }
}

export interface IAdditionalParamsProps {
  arr: IAdditionalParams
}
export interface ISunInfoCardProps {
  sunrise: string
  sunset: string
}

export interface IPressureProps {
  pressure: number | null
}

export interface IUVIndexProps {
  uvIndex: number | null
}
//24h Forecast
export interface IForecast24h {
  time: string
  temperature: number
  humidity: number
  weathercode: number
}

export interface IForecast24hProps {
  arr: IForecast24h[]
}
//Daily Forecast
export interface IForecastDay {
  dayOfWeek: string
  dayTemp: number
  nightTemp: number
  dayIcon: string
  nightIcon: string
  dayDescription: string
  nightDescription: string
}

export interface IDailyForecastProps {
  arr: IForecastDay[]
}

export interface IForeCastCardProps {
  dayOfWeek: string
  dayTemp: number
  nightTemp: number
  dayIcon: string
  nightIcon: string
}
//Moon
export interface IMoonPhaseData {
  date: string
  phaseName: string
  phaseIcon: string
  age: number
  sunrise: string
  sunset: string
}

export interface IMoonPhasesProps {
  arr: IMoonPhaseData[]
}

export interface IMoonTodayProps {
  arr: IMoonPhaseData[]
}

export interface IMoonInfoProps {
  phaseName: string
  phaseIcon: string
  age: number
}

export interface IMoonSetProps {
  type: string
  time: string
}
export interface IMoonPhaseCardProps {
  date: string
  phaseName: string
  phaseIcon: string
  age: number
}
