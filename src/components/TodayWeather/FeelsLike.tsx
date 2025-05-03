import React from 'react'
import { useTranslation } from 'react-i18next'
import { IFeelsLikeProps } from '../../types'
import style from '../../styles/components/TodayWeather/FeelsLike.module.css'

const FeelsLike: React.FC<IFeelsLikeProps> = (props) => {
  const { feelsLike } = props
  const { t } = useTranslation()
  return (
    <div className={style.container}>
      <p className={style.text}>{t('todayWeather.feelsLike')}</p>
      <p title="The temperature in degrees Celsius" className={style.parameter}>
        {feelsLike}
        <span>°</span>
      </p>
    </div>
  )
}

export default FeelsLike
