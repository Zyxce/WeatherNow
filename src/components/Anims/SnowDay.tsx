import React from 'react'
import style from '../../styles/components/Anims/SnowDay.module.css'
import rainFogSmallDay from '../../assets/anims/rainFogSmallDay.svg'
import rainFogBigDay from '../../assets/anims/rainFogBigDay.svg'
import rainFogMediumDay from '../../assets/anims/rainFogMediumDay.svg'

const SnowDay: React.FC = () => {
  return (
    <div className={style.animContainer}>
      <img
        src={rainFogSmallDay}
        alt={'fog'}
        className={style.animFogSmall}
      ></img>
      <img
        src={rainFogMediumDay}
        alt={'fog'}
        className={style.animFogMedium}
      ></img>
      <img src={rainFogBigDay} alt={'fog'} className={style.animFogBig}></img>
      <div className={style.snowEffect}>
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className={style.snowdrop}
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

export default SnowDay
