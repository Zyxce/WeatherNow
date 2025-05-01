import React from 'react'
import { useTranslation } from 'react-i18next'
import style from '../../styles/components/TodayWeather/FeelsLike.module.css'

const FeelsLike: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div className={style.container}>
      <p className={style.text}>{t('todayWeather.feelsLike')}</p>
      <p title="The temperature in degrees Celsius" className={style.parameter}>
        19<span>°</span>
      </p>
    </div>
  )
}

export default FeelsLike
