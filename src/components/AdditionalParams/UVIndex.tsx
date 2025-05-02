import React from 'react'
import { IUVIndex } from '../../types'
import { useTranslation } from 'react-i18next'
import style from '../../styles/components/AdditionalParams/UVIndex.module.css'

const UVIndex: React.FC<IUVIndex> = (props) => {
  const { t } = useTranslation()
  const { uvIndex } = props
  return (
    <div className={style.card}>
      <p className={style.text}>
        {t('additionalParams.UV')} <span>{t('additionalParams.index')}</span>
      </p>
      <p className={style.param}> {uvIndex}</p>
    </div>
  )
}

export default UVIndex
