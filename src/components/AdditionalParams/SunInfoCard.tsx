import React from 'react'
import { ISunInfoCardProps } from '../../types'
import { useTranslation } from 'react-i18next'
import { timeToMinutes } from '../../utils/timeUtils'
import style from '../../styles/components/AdditionalParams/SunInfoCard.module.css'
import testIcon from '../../assets/icons/weather-theme-light.svg'

const SunInfoCard: React.FC<ISunInfoCardProps> = (props) => {
  const { t } = useTranslation()
  const { sunrise, sunset, cityTime } = props
  const sunriseMinutes = timeToMinutes(sunrise)
  const sunsetMinutes = timeToMinutes(sunset)
  const cityTimeMinutes = timeToMinutes(cityTime)

  const isDay =
    cityTimeMinutes > sunriseMinutes && cityTimeMinutes < sunsetMinutes
  return (
    <div className={style.card}>
      <div className={style.left}>
        <p className={style.type}>{t('additionalParams.sunrise')}</p>
        <p className={style.time}>
          sunrise{sunrise} sunset {sunset}citytime {cityTime}
          <span></span>
        </p>
      </div>
      <img src={testIcon} alt={'sun'} className={style.icon}></img>
    </div>
  )
}

export default SunInfoCard
