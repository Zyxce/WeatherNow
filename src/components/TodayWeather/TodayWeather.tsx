import React from 'react'
import FeelsLike from './FeelsLike'
import { ITodayWeatherProps } from '../../types'
import LocationInfo from './LocationInfo'
import WeatherIcon from './WeatherIcon'
import WindInfo from './WindInfo'
import HumidityInfo from './HumidityInfo'
import useRound from '../../hooks/useRound'
import style from '../../styles/components/TodayWeather/TodayWeather.module.css'

const TodayWeather: React.FC<ITodayWeatherProps> = (props) => {
  const { arr } = props
  return (
    <section className={style.section}>
      <div className={style.containerTop}>
        <LocationInfo
          city={arr.locationInfo.city}
          main={arr.locationInfo.main}
          temperature={useRound(arr.locationInfo.temperature)}
        />
        <WeatherIcon icon={arr.weatherIcon.icon} />
      </div>
      <div className={style.containerBottom}>
        <FeelsLike feelsLike={useRound(arr.feelsLike.feelsLike)} />
        <HumidityInfo humidity={arr.humidityInfo.humidity} />
        <WindInfo wind={useRound(arr.windInfo.wind)} />
      </div>
    </section>
  )
}

export default TodayWeather
