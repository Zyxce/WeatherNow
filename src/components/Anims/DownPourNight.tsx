import React from 'react'
import style from '../../styles/components/Anims/DownPourNight.module.css'
import StarAnim from './StarAnim'
import moonMain from '../../assets/anims/moonMain.svg'
import overcastFogSmallNight from '../../assets/anims/overcastFogSmallNight.svg'
import rainFogBigNight from '../../assets/anims/rainFogBigNight.svg'

const DownPourNight: React.FC = () => {
  return (
    <div className={style.animContainer}>
      <img src={moonMain} alt={'moon'} className={style.animMoon}></img>
      <img
        src={overcastFogSmallNight}
        alt={'fog'}
        className={style.animFogSmall}
      ></img>
      <img src={rainFogBigNight} alt={'fog'} className={style.animFogBig}></img>
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
      <StarAnim />
    </div>
  )
}

export default DownPourNight
