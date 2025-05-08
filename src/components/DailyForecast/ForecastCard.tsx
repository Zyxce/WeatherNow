import React from 'react'
import { IForeCastCardProps } from '../../types'
import { useAppSelector } from '../../hooks/reduxHooks'
import useRound from '../../hooks/useRound'
import useWeatherIcon from '../../hooks/useWeatherIcon'
import useTranslateDayOfWeek from '../../hooks/useTranslateDayOfWeek'
import style from '../../styles/components/DailyForecast/ForecastCard.module.css'

const ForecastCard: React.FC<IForeCastCardProps> = (props) => {
  const { dayOfWeek, dayTemp, nightTemp, dayIcon, nightIcon } = props
  const theme = useAppSelector((state) => state.theme.theme)
  const language = useAppSelector((state) => state.language.language)

  let weatherIcon = ''
  if (theme === 'dark') {
    weatherIcon = nightIcon
  } else {
    weatherIcon = dayIcon
  }

  return (
    <div className={style.card}>
      <h3 className={style.day}>
        {useTranslateDayOfWeek(dayOfWeek, language)}
      </h3>
      <img
        src={useWeatherIcon(weatherIcon)}
        alt="weather"
        className={style.icon}
      ></img>
      <p className={style.temperature}>
        {useRound(dayTemp)}
        <span>°</span>
      </p>
      <p className={style.feelsLike}>
        {useRound(nightTemp)}
        <span>°</span>
      </p>
    </div>
  )
}

export default ForecastCard
