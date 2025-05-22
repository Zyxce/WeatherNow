import React from 'react'
import overcastFogSmallDay from '../../assets/anims/overcastFogSmallDay.svg'
import overcastFogBigDay from '../../assets/anims/overcastFogBigDay.svg'
import overcastFogMediumDay from '../../assets/anims/overcastFogMediumDay.svg'
import style from '../../styles/components/Anims/OvercastDay.module.css'

const OvercastDay: React.FC = () => {
  return (
    <div className={style.animContainer}>
      <img
        src={overcastFogSmallDay}
        alt={'fog'}
        className={style.animFogSmall}
      ></img>
      <img
        src={overcastFogMediumDay}
        alt={'fog'}
        className={style.animFogMedium}
      ></img>
      <img
        src={overcastFogBigDay}
        alt={'fog'}
        className={style.animFogBig}
      ></img>
    </div>
  )
}

export default OvercastDay
