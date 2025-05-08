import React from 'react'
import style from '../../styles/components/MoonPhases/MoonPhases.module.css'
import MoonPhaseCard from './MoonPhaseCard'
import { IMoonPhasesProps, IMoonPhaseData } from '../../types'

const MoonPhases: React.FC<IMoonPhasesProps> = ({ arr }) => {
  return (
    <div className={style.container}>
      {arr.map((item: IMoonPhaseData, index: number) => (
        <MoonPhaseCard
          key={index}
          date={item.date}
          phaseName={item.phaseName}
          phaseIcon={item.phaseIcon}
          age={item.age}
        />
      ))}
    </div>
  )
}

export default MoonPhases
