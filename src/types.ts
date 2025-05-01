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

export interface ISunInfoCard {
  sunrise: string
}

export interface IPressure {
  pressure: number
}

export interface IUVIndex {
  uvIndex: number
}
