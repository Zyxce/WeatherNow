import React from 'react'
import StarAnim from './StarAnim'
import style from '../../styles/components/Anims/ClearNight.module.css'
import moonMain from '../../assets/anims/moonMain.svg'

const ClearNight: React.FC = () => {
  return (
    <div className={style.animContainer}>
      <img src={moonMain} alt={'moon'} className={style.animMoon}></img>
      <StarAnim />
    </div>
  )
}

export default ClearNight
