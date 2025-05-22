import React from 'react'
import FeelsLike from './FeelsLike'
import { ITodayWeatherProps } from '../../types'
import LocationInfo from './LocationInfo'
import WeatherIcon from './WeatherIcon'
import WeatherAnim from './WeatherAnim'
import WindInfo from './WindInfo'
import HumidityInfo from './HumidityInfo'
import useRound from '../../hooks/useRound'
import style from '../../styles/components/TodayWeather/TodayWeather.module.css'

const TodayWeather: React.FC<ITodayWeatherProps> = (props) => {
  const { arr } = props
  console.log(arr.weatherIcon.icon)
  return (
    <section className={style.section}>
      <div className={style.containerTop}>
        <LocationInfo
          city={arr.locationInfo.city}
          description={arr.locationInfo.description}
          temperature={useRound(arr.locationInfo.temperature)}
        />
        <WeatherAnim icon={arr.weatherIcon.icon} />
        {/* <WeatherIcon icon={arr.weatherIcon.icon} /> */}
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
