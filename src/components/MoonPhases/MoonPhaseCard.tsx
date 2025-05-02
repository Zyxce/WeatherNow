import React from 'react'
import { IMoon } from '../../types'
import { useTranslation } from 'react-i18next'
import moonImg from '../../assets/icons/weather-theme-dark.svg'
import style from '../../styles/components/MoonPhases/MoonPhaseCard.module.css'

const MoonPhaseCard: React.FC<IMoon> = (props) => {
  const { t } = useTranslation()
  const { day, moonDay, phase } = props
  return (
    <div className={style.card}>
      <h3 className={style.day}>{day}</h3>
      <img src={moonImg} alt={'moon'} className={style.icon}></img>
      <p className={style.moonDay}>
        {t('moonPhase.moonday')} {moonDay}
      </p>
      <p className={style.phase}>{phase}</p>
    </div>
  )
}

export default MoonPhaseCard
