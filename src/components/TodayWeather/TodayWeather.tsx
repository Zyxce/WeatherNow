import React from 'react'
import FeelsLike from './FeelsLike'
import LocationInfo from './LocationInfo'
import WeatherIcon from './WeatherIcon'
import WindInfo from './WindInfo'
import HumidityInfo from './HumidityInfo'
import style from '../../styles/components/TodayWeather/TodayWeather.module.css'

const TodayWeather: React.FC = () => {
  return (
    <section className={style.section}>
      <div className={style.containerTop}>
        <LocationInfo />
        <WeatherIcon />
      </div>
      <div className={style.containerBottom}>
        <FeelsLike />
        <HumidityInfo />
        <WindInfo />
      </div>
    </section>
  )
}

export default TodayWeather
