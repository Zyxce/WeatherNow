import React from 'react'
import style from '../../styles/components/TodayWeather/WeatherIcon.module.css'
import icon from '../../assets/icons/weather-theme-light.svg'

const WeatherIcon: React.FC = () => {
  return (
    <div className={style.container}>
      <img className={style.icon} src={icon} alt="icon"></img>
    </div>
  )
}

export default WeatherIcon
