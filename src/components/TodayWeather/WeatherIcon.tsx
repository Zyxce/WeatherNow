import React from 'react'
import style from '../../styles/components/TodayWeather/WeatherIcon.module.css'
import { IWeatherIconProps } from '../../types'
import useWeatherIcon from '../../hooks/useWeatherIcon'

const WeatherIcon: React.FC<IWeatherIconProps> = (props) => {
  const { icon } = props
  const iconTrue = useWeatherIcon(icon)

  return (
    <div className={style.container}>
      <img className={style.icon} src={iconTrue} alt="weather icon" />
    </div>
  )
}

export default WeatherIcon
