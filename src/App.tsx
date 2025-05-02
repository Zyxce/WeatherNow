import React from 'react'
import { useThemeAutoEffect } from './hooks/useThemeAutoEffect'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './store/store'
import Header from './components/Header/Header'
import TodayWeather from './components/TodayWeather/TodayWeather'
import AdditionalParams from './components/AdditionalParams/AdditionalParams'
import DailyForecast from './components/DailyForecast/DailyForecast'
import MoonPhases from './components/MoonPhases/MoonPhases'
import Footer from './components/Footer/Footer'
import './styles/components/App.css'

const App: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme)
  useThemeAutoEffect()
  return (
    <div className="App">
      <Header />

      <div className={theme === 'dark' ? 'night-bg' : 'day-bg'}>
        <TodayWeather />
        <DailyForecast />
      </div>
      <AdditionalParams />
      {/* <WeatherChart /> */}
      <MoonPhases />
      <Footer />
    </div>
  )
}

export default App
