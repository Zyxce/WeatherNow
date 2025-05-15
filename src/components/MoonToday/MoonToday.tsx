import React from 'react'
import MoonInfo from './MoonInfo'
import MoonSet from './MoonSet'
import style from '../../styles/components/MoonToday/MoonToday.module.css'
import { IMoonTodayProps } from '../../types'

const MoonToday: React.FC<IMoonTodayProps> = ({ arr }) => {
  const moonData = arr[0]
  return (
    <div className={style.container}>
      <MoonInfo
        phaseName={moonData.phaseName}
        phaseIcon={moonData.phaseIcon}
        age={moonData.age}
      />
      <MoonSet type="rise" time={moonData.sunrise} />
      <MoonSet type="set" time={moonData.sunset} />
    </div>
  )
}

export default MoonToday
