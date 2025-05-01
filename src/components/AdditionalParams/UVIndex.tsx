import React from 'react'
import { IUVIndex } from '../../types'
import style from '../../styles/components/AdditionalParams/UVIndex.module.css'

const UVIndex: React.FC<IUVIndex> = (props) => {
  const { uvIndex } = props
  return (
    <div className={style.card}>
      <p className={style.text}>UV Index</p>
      <p className={style.param}> {uvIndex}</p>
    </div>
  )
}

export default UVIndex
