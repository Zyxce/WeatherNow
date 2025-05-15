import React from 'react'
import { useTranslation } from 'react-i18next'
import { IMoonSetProps } from '../../types'
import style from '../../styles/components/MoonToday/MoonSet.module.css'

const MoonSet: React.FC<IMoonSetProps> = (props) => {
  const { type, time } = props
  const { t } = useTranslation()
  return (
    <div className={style.card}>
      <p className={style.text}>
        {type === 'rise'
          ? t('additionalParams.sunrise')
          : t('additionalParams.sunset')}
      </p>
      <p className={style.param}>{time}</p>
    </div>
  )
}

export default MoonSet
