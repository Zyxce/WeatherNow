import React from 'react'
import { ISunInfoCard } from '../../types'
import { useTranslation } from 'react-i18next'
import style from '../../styles/components/AdditionalParams/SunInfoCard.module.css'
import testIcon from '../../assets/icons/weather-theme-light.svg'

const SunInfoCard: React.FC<ISunInfoCard> = (props) => {
  const { t } = useTranslation()
  const { sunrise } = props
  return (
    <div className={style.card}>
      <div className={style.left}>
        <p className={style.type}>{t('additionalParams.sunrise')}</p>
        <p className={style.time}>
          {sunrise}
          <span>AM</span>
        </p>
      </div>
      <img src={testIcon} alt={'sun'} className={style.icon}></img>
    </div>
  )
}

export default SunInfoCard
