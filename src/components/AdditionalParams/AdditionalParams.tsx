import React from 'react'
import style from '../../styles/components/AdditionalParams/AdditionalParams.module.css'
import Pressure from './Pressure'
import SunInfoCard from './SunInfoCard'
import UVIndex from './UVIndex'
import { IAdditionalParamsProps } from '../../types'
import useRound from '../../hooks/useRound'
import useFormattedTime from '../../hooks/useFormattedTime'
import useCityTime from '../../hooks/useCityTime'

const AdditionalParams: React.FC<IAdditionalParamsProps> = (props) => {
  const { arr } = props
  return (
    <div className={style.container}>
      <SunInfoCard
        sunrise={useFormattedTime(
          arr.sunInfoCard.sunrise,
          arr.sunInfoCard.timeZone
        )}
        sunset={useFormattedTime(
          arr.sunInfoCard.sunset,
          arr.sunInfoCard.timeZone
        )}
        cityTime={useCityTime(arr.sunInfoCard.timeZone)}
      />
      <Pressure pressure={arr.pressure.pressure} />
      <UVIndex uvIndex={useRound(arr.uvIndex.uvIndex)} />
    </div>
  )
}

export default AdditionalParams
