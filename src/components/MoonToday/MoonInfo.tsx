import React, { use } from 'react'
import { useTranslation } from 'react-i18next'
import { IMoonInfoProps } from '../../types'
import { useAppSelector } from '../../hooks/reduxHooks'
import useTranslateMoonPhase from '../../hooks/useTranslateMoonPhase'
import useMoonIcon from '../../hooks/useMoonIcon'
import style from '../../styles/components/MoonToday/MoonInfo.module.css'

const MoonInfo: React.FC<IMoonInfoProps> = (props) => {
  const { phaseName, phaseIcon, age } = props
  const { t } = useTranslation()
  const language = useAppSelector((state) => state.language.language)

  return (
    <div className={style.card}>
      <div className={style.left}>
        <p className={style.type}>{t('dayOfWeek.today')}</p>
        <p className={style.time}>
          {useTranslateMoonPhase(phaseName, language)}
        </p>
      </div>
      <img
        alt={'moon'}
        src={useMoonIcon(phaseIcon)}
        className={style.icon}
      ></img>
    </div>
  )
}

export default MoonInfo
