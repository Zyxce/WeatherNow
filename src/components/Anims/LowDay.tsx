import React from 'react'
import style from '../../styles/components/Anims/LowDay.module.css'
import sunMain from '../../assets/anims/sunMain.svg'
import sunFirstGradient from '../../assets/anims/sunFirstGradient.svg'
import sunMidGradient from '../../assets/anims/sunMidGradient.svg'
import sunLastGradient from '../../assets/anims/sunLastGradient.svg'
import scatteredFogSmallDay from '../../assets/anims/scatteredFogSmallDay.svg'

const LowDay: React.FC = () => {
  return (
    <div className={style.animContainer}>
      <>
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
      </>
      <img
        src={scatteredFogSmallDay}
        alt={'fog'}
        className={style.animFogSmall}
      ></img>
    </div>
  )
}

export default LowDay
