import React from 'react'
import style from '../../styles/components/Anims/LowNight.module.css'
import StarAnim from './StarAnim'
import moonMain from '../../assets/anims/moonMain.svg'
import scatteredFogSmallNight from '../../assets/anims/scatteredFogSmallNight.svg'

const LowNight: React.FC = () => {
  return (
    <div className={style.animContainer}>
      <img src={moonMain} alt={'moon'} className={style.animMoon}></img>
      <img
        src={scatteredFogSmallNight}
        alt={'fog'}
        className={style.animFogSmall}
      ></img>
      <StarAnim />
    </div>
  )
}

export default LowNight
