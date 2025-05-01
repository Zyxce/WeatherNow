import React from 'react'
import { useThemeAutoEffect } from './hooks/useThemeAutoEffect'
import Header from './components/Header/Header'
import TodayWeather from './components/TodayWeather/TodayWeather'
import AdditionalParams from './components/AdditionalParams/AdditionalParams'
import DailyForecast from './components/DailyForecast/DailyForecast'
import WeatherChart from './components/WeatherChart/WeatherChart'
import MoonPhases from './components/MoonPhases/MoonPhases'
import Footer from './components/Footer/Footer'
import './styles/components/App.css'

const App: React.FC = () => {
  useThemeAutoEffect()
  return (
    <div className="App">
      <Header />

      <div className="weatherSection">
        <TodayWeather />
        <DailyForecast />
        <AdditionalParams />
      </div>

      <WeatherChart />
      <MoonPhases />
      <Footer />
    </div>
  )
}

export default App
