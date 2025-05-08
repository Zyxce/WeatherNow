import React from 'react'
import { IMoonPhaseCardProps } from '../../types'
import { useAppSelector } from '../../hooks/reduxHooks'
import useMoonIcon from '../../hooks/useMoonIcon'
import { useTranslation } from 'react-i18next'
import useTranslateDayOfWeek from '../../hooks/useTranslateDayOfWeek'
import useTranslateMoonPhase from '../../hooks/useTranslateMoonPhase'
import style from '../../styles/components/MoonPhases/MoonPhaseCard.module.css'

const MoonPhaseCard: React.FC<IMoonPhaseCardProps> = (props) => {
  const { t } = useTranslation()
  const language = useAppSelector((state) => state.language.language)

  const { date, age, phaseName, phaseIcon } = props
  return (
    <div className={style.card}>
      <h3 className={style.day}>{useTranslateDayOfWeek(date, language)}</h3>
      <img
        src={useMoonIcon(phaseIcon)}
        alt={'moon'}
        className={style.icon}
      ></img>
      <p className={style.moonDay}>
        {t('moonPhase.moonday')} {age}
      </p>
      <p className={style.phase}>
        {useTranslateMoonPhase(phaseName, language)}
      </p>
    </div>
  )
}

export default MoonPhaseCard
