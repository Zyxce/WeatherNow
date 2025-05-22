import React from 'react'
import style from '../../styles/components/Anims/SnowNight.module.css'
import rainFogSmallNight from '../../assets/anims/rainFogSmallNight.svg'
import rainFogBigNight from '../../assets/anims/rainFogBigNight.svg'
import rainFogMediumNight from '../../assets/anims/rainFogMediumNight.svg'
import StarAnim from './StarAnim'

const SnowNight: React.FC = () => {
  return (
    <div className={style.animContainer}>
      <img
        src={rainFogSmallNight}
        alt={'fog'}
        className={style.animFogSmall}
      ></img>
      <img
        src={rainFogMediumNight}
        alt={'fog'}
        className={style.animFogMedium}
      ></img>
      <img src={rainFogBigNight} alt={'fog'} className={style.animFogBig}></img>
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
      <StarAnim />
    </div>
  )
}

export default SnowNight
