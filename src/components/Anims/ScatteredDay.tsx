import React from 'react'
import style from '../../styles/components/Anims/ScatteredDay.module.css'
import sunMain from '../../assets/anims/sunMain.svg'
import sunFirstGradient from '../../assets/anims/sunFirstGradient.svg'
import sunMidGradient from '../../assets/anims/sunMidGradient.svg'
import sunLastGradient from '../../assets/anims/sunLastGradient.svg'
import scatteredFogSmallDay from '../../assets/anims/scatteredFogSmallDay.svg'
import scatteredFogBigDay from '../../assets/anims/scatteredFogBigDay.svg'

const ScatteredDay: React.FC = () => {
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
      <img
        src={scatteredFogBigDay}
        alt={'fog'}
        className={style.animFogBig}
      ></img>
    </div>
  )
}

export default ScatteredDay
