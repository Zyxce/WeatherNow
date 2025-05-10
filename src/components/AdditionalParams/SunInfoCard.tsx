import React from 'react'
import { ISunInfoCardProps } from '../../types'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '../../hooks/reduxHooks'
import style from '../../styles/components/AdditionalParams/SunInfoCard.module.css'
import sunriseIcon from '../../assets/icons/sunrise.svg'
import sunsetIcon from '../../assets/icons/sunset.svg'

const SunInfoCard: React.FC<ISunInfoCardProps> = (props) => {
  const { t } = useTranslation()
  const theme = useAppSelector((state) => state.theme.theme)
  const { sunrise, sunset } = props
  return (
    <div className={style.card}>
      <div className={style.left}>
        <p className={style.type}>
          {theme === 'dark'
            ? t('additionalParams.sunrise')
            : t('additionalParams.sunset')}
        </p>
        <p className={style.time}>
          {theme === 'dark' ? sunrise : sunset}
          <span></span>
        </p>
      </div>
      <img
        src={theme === 'dark' ? sunriseIcon : sunsetIcon}
        alt={'sun'}
        className={style.icon}
      ></img>
    </div>
  )
}

export default SunInfoCard
