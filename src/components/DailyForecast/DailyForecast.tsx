import React from 'react'
import style from '../../styles/components/DailyForecast/DailyForecast.module.css'
import ForecastCard from './ForecastCard'
import { ICard } from '../../types'
import foreCastArr from '../../data/dailyForecastData.json'

const DailyForecast: React.FC = () => {
  const arr: ICard[] = foreCastArr
  return (
    <div className={style.container}>
      {arr.map((item: ICard, index: number) => (
        <ForecastCard key={index} {...item} />
      ))}
    </div>
  )
}

export default DailyForecast
