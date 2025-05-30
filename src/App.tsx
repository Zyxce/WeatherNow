import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks'
import { fetchWeather } from './store/weatherSlice'
import { setAutoTheme } from './store/themeSlice'
import {
  ITodayWeather,
  IAdditionalParams,
  IForecastDay,
  IMoonPhaseData,
  IForecast24h,
} from './types'
import Header from './components/Header/Header'
import TodayWeather from './components/TodayWeather/TodayWeather'
import HourlyForecast from './components/HourlyForecast/HourlyForecast'
import AdditionalParams from './components/AdditionalParams/AdditionalParams'
import DailyForecast from './components/DailyForecast/DailyForecast'
import MoonToday from './components/MoonToday/MoonToday'
import MoonPhases from './components/MoonPhases/MoonPhases'
import Footer from './components/Footer/Footer'
import './styles/components/App.css'

const App: React.FC = () => {
  const language = useAppSelector((state) => state.language.language)
  const theme = useAppSelector((state) => state.theme.theme)
  const city = useAppSelector((state) => state.search.city)
  const isAutoTheme = useAppSelector((state) => state.theme.isAutoTheme)
  const { data, loading, error } = useAppSelector((state) => state.weather)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(
      fetchWeather({
        city: city,
        lang: language,
      })
    )
  }, [dispatch, city, language])

  //настройка темы от времени суток в городе
  useEffect(() => {
    if (data?.today && isAutoTheme) {
      dispatch(
        setAutoTheme({
          sunrise: data.today.sunrise,
          sunset: data.today.sunset,
          timeZone: data.today.timeZone,
        })
      )
    }
  }, [data, dispatch, isAutoTheme])
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  if (!data) return null

  const todayWeather: ITodayWeather = {
    locationInfo: {
      city: data.today.city,
      description: data.today.description,
      temperature: data.today.temperature,
    },
    weatherIcon: {
      icon: data.today.icon,
    },
    feelsLike: {
      feelsLike: data.today.feelsLike,
    },
    humidityInfo: {
      humidity: data.today.humidity,
    },
    windInfo: {
      wind: data.today.wind,
    },
  }

  const additionalParams: IAdditionalParams = {
    sunInfoCard: {
      sunrise: data.today.sunrise,
      sunset: data.today.sunset,
      timeZone: data.today.timeZone,
    },
    pressure: {
      pressure: data.today.pressure,
    },
    uvIndex: {
      uvIndex: data.today.uvIndex,
    },
  }

  const forecast24hArray: IForecast24h[] = data.forecast24h || []

  const forecastArray: IForecastDay[] = data.forecast || []

  const moonPhasesArray: IMoonPhaseData[] = data.moonPhases.slice(1, 5) || []

  const moonTodayArray: IMoonPhaseData[] = data.moonPhases.slice(0, 1) || []

  //проверка времени в городе при отладке
  // const now = Math.floor(Date.now() / 1000)
  // const cityNow = now + data.today.timeZone
  // const timestamp = cityNow * 1000
  // const date = new Date(timestamp)
  // console.log(date.toUTCString())

  console.log('Forecast24h data:', data.forecast24h)
  return (
    <div className="App">
      <Header />

      <div className={theme === 'dark' ? 'night-bg' : 'day-bg'}>
        <TodayWeather arr={todayWeather} />
        <HourlyForecast arr={forecast24hArray} />
        <AdditionalParams arr={additionalParams} />
      </div>
      {/* <WeatherChart /> */}
      <DailyForecast arr={forecastArray} />
      <MoonToday arr={moonTodayArray} />
      <MoonPhases arr={moonPhasesArray} />
      <Footer />
    </div>
  )
}

export default App
