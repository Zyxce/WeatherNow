import React from 'react'
import HourlyForecastCard from './HourlyForecastCard'
import { IForecast24hProps, IForecast24h } from '../../types'
import style from '../../styles/components/HourlyForecast/HourlyForecast.module.css'

const HourlyForecast: React.FC<IForecast24hProps> = ({ arr }) => {
  return (
    <div className={style.container}>
      {arr.map((item: IForecast24h, index: number) => (
        <HourlyForecastCard
          key={index}
          time={item.time}
          temperature={item.temperature}
          humidity={item.humidity}
          weathercode={item.weathercode}
        />
      ))}
    </div>
  )
}

export default HourlyForecast
