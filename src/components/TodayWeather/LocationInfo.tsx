import React from 'react'
import style from '../../styles/components/TodayWeather/LocationInfo.module.css'
import { ILocationInfoProps } from '../../types'

const LocationInfo: React.FC<ILocationInfoProps> = (props) => {
  const { city, temperature, main } = props
  return (
    <div className={style.container}>
      <div className={style.locationInfo}>
        <h1 title="City" className={style.city}>
          {city}
        </h1>
        <p title="Country" className={style.country}>
          {main}
        </p>
      </div>
      <p title="The temperature in degrees Celsius" className={style.temp}>
        {temperature}
        <span>°</span>
      </p>
    </div>
  )
}

export default LocationInfo
