import React from 'react'
import { ICard } from '../../types'
import weatherImg from '../../assets/icons/weather-theme-light.svg'
import style from '../../styles/components/DailyForecast/ForecastCard.module.css'

const ForecastCard: React.FC<ICard> = (props) => {
  const { day, weather, temperature, feelsLike } = props
  return (
    <div className={style.card}>
      <h3 className={style.day}>{day}</h3>
      <img src={weatherImg} alt="weather" className={style.icon}></img>
      <p className={style.temperature}>
        {temperature}
        <span>°</span>
      </p>
      <p className={style.feelsLike}>
        {feelsLike}
        <span>°</span>
      </p>
    </div>
  )
}

export default ForecastCard
