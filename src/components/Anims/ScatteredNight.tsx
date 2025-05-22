import React from 'react'
import style from '../../styles/components/Anims/ScatteredNight.module.css'
import StarAnim from './StarAnim'
import moonMain from '../../assets/anims/moonMain.svg'
import scatteredFogSmallNight from '../../assets/anims/scatteredFogSmallNight.svg'
import scatteredFogBigNight from '../../assets/anims/scatteredFogBigNight.svg'

const ScatteredNight: React.FC = () => {
  return (
    <div className={style.animContainer}>
      <img src={moonMain} alt={'moon'} className={style.animMoon}></img>
      <img
        src={scatteredFogBigNight}
        alt={'fog'}
        className={style.animFogBig}
      ></img>
      <img
        src={scatteredFogSmallNight}
        alt={'fog'}
        className={style.animFogSmall}
      ></img>
      <StarAnim />
    </div>
  )
}

export default ScatteredNight
