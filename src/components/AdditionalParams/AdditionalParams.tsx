import React from 'react'
import style from '../../styles/components/AdditionalParams/AdditionalParams.module.css'
import Pressure from './Pressure'
import SunInfoCard from './SunInfoCard'
import UVIndex from './UVIndex'

import foreCastArr from '../../data/dailyForecastData.json'
import { ICard } from '../../types'

const AdditionalParams: React.FC = () => {
  const arr: ICard[] = foreCastArr
  const today = arr[0]
  return (
    <div className={style.container}>
      <SunInfoCard sunrise={today.sunrise} />
      <Pressure pressure={today.pressure} />
      <UVIndex uvIndex={today.uvIndex} />
    </div>
  )
}

export default AdditionalParams
