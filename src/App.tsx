import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from './store/themeSlice'
import { toggleLanguage } from './store/languageSlice'
import { RootState, AppDispatch } from './store/store'
import { useTranslation } from 'react-i18next'
import Header from './components/Header/Header'
import TodayWeather from './components/TodayWeather/TodayWeather'
import AdditionalParams from './components/AdditionalParams/AdditionalParams'
import DailyForecast from './components/DailyForecast/DailyForecast'
import WeatherChart from './components/WeatherChart/WeatherChart'
import MoonPhases from './components/MoonPhases/MoonPhases'
import Footer from './components/Footer/Footer'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <TodayWeather />
      <AdditionalParams />
      <DailyForecast />
      <WeatherChart />
      <MoonPhases />
      <Footer />
    </div>
  )
}

export default App
