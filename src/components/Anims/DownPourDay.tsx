import React from 'react'
import style from '../../styles/components/Anims/DownPourDay.module.css'
import sunMain from '../../assets/anims/sunMain.svg'
import sunFirstGradient from '../../assets/anims/sunFirstGradient.svg'
import sunMidGradient from '../../assets/anims/sunMidGradient.svg'
import sunLastGradient from '../../assets/anims/sunLastGradient.svg'
import overcastFogSmallDay from '../../assets/anims/overcastFogSmallDay.svg'
import rainFogBigDay from '../../assets/anims/rainFogBigDay.svg'

const DownPourDay: React.FC = () => {
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
        src={overcastFogSmallDay}
        alt={'fog'}
        className={style.animFogSmall}
      ></img>
      <img src={rainFogBigDay} alt={'fog'} className={style.animFogBig}></img>
      <div className={style.rainEffect}>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={style.raindrop}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default DownPourDay
