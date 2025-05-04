export interface ICard {
  day: string
  weather: string
  temperature: number
  feelsLike: number
  humidity: number
  wind: number
  uvIndex: number
  sunrise: string
  sunset: string
  pressure: number
}

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
    main: string | null
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
  main: string | null
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
  cityTime: string
}

export interface IPressureProps {
  pressure: number | null
}

export interface IUVIndexProps {
  uvIndex: number | null
}

export interface IMoon {
  day: string
  moonDay: number
  phase: string
}
