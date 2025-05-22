import React from 'react'
import overcastFogSmallNight from '../../assets/anims/overcastFogSmallNight.svg'
import overcastFogBigNight from '../../assets/anims/overcastFogBigNight.svg'
import overcastFogMediumNight from '../../assets/anims/overcastFogMediumNight.svg'
import style from '../../styles/components/Anims/OvercastNight.module.css'
import StarAnim from './StarAnim'

const OvercastNight: React.FC = () => {
  return (
    <div className={style.animContainer}>
      <img
        src={overcastFogSmallNight}
        alt={'fog'}
        className={style.animFogSmall}
      ></img>
      <img
        src={overcastFogMediumNight}
        alt={'fog'}
        className={style.animFogMedium}
      ></img>
      <img
        src={overcastFogBigNight}
        alt={'fog'}
        className={style.animFogBig}
      ></img>
      <StarAnim />
    </div>
  )
}

export default OvercastNight
