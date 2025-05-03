import React from 'react'
import { useTranslation } from 'react-i18next'
import { IWindInfoProps } from '../../types'
import style from '../../styles/components/TodayWeather/WindInfo.module.css'

const WindInfo: React.FC<IWindInfoProps> = (props) => {
  const { wind } = props
  const { t } = useTranslation()
  return (
    <div className={style.container}>
      <p className={style.text}>{t('todayWeather.wind')}</p>
      <p title="Humidity as a percentage" className={style.parameter}>
        {wind}
        <span>{t('todayWeather.ms')}</span>
      </p>
    </div>
  )
}

export default WindInfo
