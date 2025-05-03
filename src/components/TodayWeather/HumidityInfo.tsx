import React from 'react'
import style from '../../styles/components/TodayWeather/HumidityInfo.module.css'
import { useTranslation } from 'react-i18next'
import { IHumidityInfoProps } from '../../types'

const HumidityInfo: React.FC<IHumidityInfoProps> = (props) => {
  const { humidity } = props
  const { t } = useTranslation()
  return (
    <div className={style.container}>
      <p className={style.text}>{t('todayWeather.humidity')}</p>
      <p title="Humidity as a percentage" className={style.parameter}>
        {humidity}
        <span>%</span>
      </p>
    </div>
  )
}

export default HumidityInfo
