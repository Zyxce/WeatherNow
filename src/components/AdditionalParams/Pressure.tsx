import React from 'react'
import { IPressure } from '../../types'
import { useTranslation } from 'react-i18next'
import style from '../../styles/components/AdditionalParams/Pressure.module.css'

const Pressure: React.FC<IPressure> = (props) => {
  const { t } = useTranslation()
  const { pressure } = props
  return (
    <div className={style.card}>
      <p className={style.text}>{t('additionalParams.pressure')}</p>
      <p className={style.param}>
        {pressure}
        <span>hPa</span>
      </p>
    </div>
  )
}

export default Pressure
