import React from 'react'
import style from '../../styles/components/TodayWeather/LocationInfo.module.css'

const LocationInfo: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.locationInfo}>
        <h1 title="City" className={style.city}>
          Moscow
        </h1>
        <p title="Country" className={style.country}>
          Russian Federation
        </p>
      </div>
      <p title="The temperature in degrees Celsius" className={style.temp}>
        22<span>°</span>
      </p>
    </div>
  )
}

export default LocationInfo
