import React from 'react'
import style from '../../styles/components/TodayWeather/HumidityInfo.module.css'
import { useTranslation } from 'react-i18next'

const HumidityInfo: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div className={style.container}>
      <p className={style.text}>{t('todayWeather.humidity')}</p>
      <p title="Humidity as a percentage" className={style.parameter}>
        66<span>%</span>
      </p>
    </div>
  )
}

export default HumidityInfo
