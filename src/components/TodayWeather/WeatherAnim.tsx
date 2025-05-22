import React from 'react'
import style from '../../styles/components/TodayWeather/WeatherAnim.module.css'
import useWeatherAnim from '../../hooks/useWeatherAnim'
import { IWeatherAnimProps } from '../../types'

const WeatherAnim: React.FC<IWeatherAnimProps> = (props) => {
  const { icon } = props
  const Anim = useWeatherAnim(icon)
  return (
    <div className={style.container}>
      <Anim />
    </div>
  )
}

export default WeatherAnim
