import React from 'react'
import style from '../../styles/components/DailyForecast/DailyForecast.module.css'
import ForecastCard from './ForecastCard'
import { IForecastDay, IDailyForecastProps } from '../../types'

const DailyForecast: React.FC<IDailyForecastProps> = ({ arr }) => {
  return (
    <div className={style.container}>
      {arr.map((item: IForecastDay, index: number) => (
        <ForecastCard
          key={index}
          dayOfWeek={item.dayOfWeek}
          dayTemp={item.dayTemp}
          nightTemp={item.nightTemp}
          dayIcon={item.dayIcon}
          nightIcon={item.nightIcon}
        />
      ))}
    </div>
  )
}

export default DailyForecast
