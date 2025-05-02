import React from 'react'
import style from '../../styles/components/TodayWeather/WeatherIcon.module.css'
import useWeatherIcon from '../../hooks/useWeatherIcon'

interface WeatherIconProps {
  iconCode?: string
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ iconCode = '02n' }) => {
  const icon = useWeatherIcon(iconCode)

  return (
    <div className={style.container}>
      <img className={style.icon} src={icon} alt="weather icon" />
    </div>
  )
}

export default WeatherIcon
