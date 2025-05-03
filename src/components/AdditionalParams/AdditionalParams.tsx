import React from 'react'
import style from '../../styles/components/AdditionalParams/AdditionalParams.module.css'
import Pressure from './Pressure'
import SunInfoCard from './SunInfoCard'
import UVIndex from './UVIndex'
import { IAdditionalParamsProps } from '../../types'

const AdditionalParams: React.FC<IAdditionalParamsProps> = (props) => {
  const { arr } = props
  return (
    <div className={style.container}>
      <SunInfoCard
        sunrise={arr.sunInfoCard.sunrise}
        sunset={arr.sunInfoCard.sunset}
      />
      <Pressure pressure={arr.pressure.pressure} />
      <UVIndex uvIndex={arr.uvIndex.uvIndex} />
    </div>
  )
}

export default AdditionalParams
