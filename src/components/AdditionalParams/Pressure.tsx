import React from 'react'
import { IPressure } from '../../types'
import style from '../../styles/components/AdditionalParams/Pressure.module.css'

const Pressure: React.FC<IPressure> = (props) => {
  const { pressure } = props
  return (
    <div className={style.card}>
      <p className={style.text}>Pressure</p>
      <p className={style.param}>
        {pressure}
        <span>hPa</span>
      </p>
    </div>
  )
}

export default Pressure
