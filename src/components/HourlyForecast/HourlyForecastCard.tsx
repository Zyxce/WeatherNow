import React from 'react'
import { IForecast24h } from '../../types'
import { useAppSelector } from '../../hooks/reduxHooks'
import useWeatherIcon from '../../hooks/useWeatherIcon'
import useRound from '../../hooks/useRound'
import useHumidityIcon from '../../hooks/useHumidityIcon'
import style from '../../styles/components/HourlyForecast/HourlyForecastCard.module.css'

const HourlyForecastCard: React.FC<IForecast24h> = (props) => {
  const { time, temperature, humidity, weathercode } = props
  const theme = useAppSelector((state) => state.theme.theme)

  const formatTimeHHMM = (str: string) => {
    if (str.length !== 4) return str
    return `${str.slice(0, 2)}:${str.slice(2)}`
  }

  let humidityIconTheme = ''
  if (theme === 'dark') {
    humidityIconTheme = 'n'
  } else {
    humidityIconTheme = 'd'
  }
  let weatherIcon = ''
  if (theme === 'dark') {
    weatherIcon = weathercode + 'n'
  } else {
    weatherIcon = weathercode + 'd'
  }
  return (
    <div className={style.card}>
      <h3 className={style.time}>{formatTimeHHMM(time)}</h3>
      <img
        src={useWeatherIcon(weatherIcon)}
        alt="weather"
        className={style.icon}
      ></img>
      <p className={style.temperature}>
        {useRound(temperature)}
        <span>°</span>
      </p>
      <div className={style.humidity}>
        <img
          src={useHumidityIcon(humidity, humidityIconTheme)}
          alt={'Icon'}
        ></img>
        <p> {humidity}</p>
        <span>%</span>
      </div>
    </div>
  )
}

export default HourlyForecastCard
