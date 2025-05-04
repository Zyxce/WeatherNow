import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { IWeatherData, IWeatherState } from '../types'

const initialState: IWeatherState = {
  data: null,
  loading: false,
  error: null,
}

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city: string, { rejectWithValue }) => {
    const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY

    try {
      //Основной запрос, тут также координаты для уф индекса и луны
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      )

      const { coord, main, weather, wind, sys, name, timezone } =
        weatherResponse.data
      const { lat, lon } = coord

      //Запрос для УФ индекса
      const uvResponse = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=uv_index_max`
      )
      //Запрос на 5 дней
      //https://api.openweathermap.org/data/2.5/forecast?q=Moscow&cnt=32&units=metric&appid=API
      return {
        today: {
          city: name,
          country: sys.country,
          temperature: main.temp,
          feelsLike: main.feels_like,
          humidity: main.humidity,
          wind: wind.speed,
          sunrise: sys.sunrise,
          sunset: sys.sunset,
          pressure: main.pressure,
          icon: weather[0].icon,
          main: weather[0].main,
          description: weather[0].description,
          uvIndex: uvResponse.data.daily.uv_index_max[0],
          timeZone: timezone,
        },
      } as IWeatherData
    } catch (error: any) {
      if (error.response?.data?.message) {
        return rejectWithValue(error.response.data.message)
      }
      return rejectWithValue(error.message || 'Unknown error')
    }
  }
)

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(
        fetchWeather.fulfilled,
        (state, action: PayloadAction<IWeatherData>) => {
          state.data = action.payload
          state.loading = false
        }
      )
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch weather data'
      })
  },
})

export default weatherSlice.reducer
