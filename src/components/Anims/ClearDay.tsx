import React from 'react'
import sunMain from '../../assets/anims/sunMain.svg'
import sunFirstGradient from '../../assets/anims/sunFirstGradient.svg'
import sunMidGradient from '../../assets/anims/sunMidGradient.svg'
import sunLastGradient from '../../assets/anims/sunLastGradient.svg'
import style from '../../styles/components/Anims/ClearDay.module.css'

const ClearDay: React.FC = () => {
  return (
    <div className={style.animContainer}>
      <img
        className={`${style.animSun} ${style.sunMain}`}
        alt={'icon'}
        src={sunMain}
      ></img>
      <img
        className={`${style.animSun} ${style.sunFirstGradient}`}
        alt={'icon'}
        src={sunFirstGradient}
      ></img>
      <img
        className={`${style.animSun} ${style.sunSecondGradient}`}
        alt={'icon'}
        src={sunMidGradient}
      ></img>
      <img
        className={`${style.animSun} ${style.sunLastGradient}`}
        alt={'icon'}
        src={sunLastGradient}
      ></img>
    </div>
  )
}

export default ClearDay
