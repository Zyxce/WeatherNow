import React from 'react'
import style from '../../styles/components/MoonPhases/MoonPhases.module.css'
import MoonPhaseCard from './MoonPhaseCard'
import { IMoon } from '../../types'
import moonArr from '../../data/moonPhasesData.json'

const MoonPhases: React.FC = () => {
  const arr: IMoon[] = moonArr

  return (
    <div className={style.container}>
      {arr.map((item: IMoon, index: number) => (
        <MoonPhaseCard key={index} {...item} />
      ))}
    </div>
  )
}

export default MoonPhases
