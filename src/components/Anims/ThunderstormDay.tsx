import React, { useEffect, useState } from 'react'
import style from '../../styles/components/Anims/ThunderstormDay.module.css'
import rainFogSmallDay from '../../assets/anims/rainFogSmallDay.svg'
import thunderstormFogDay from '../../assets/anims/thunderstormFogDay.svg'
import rainFogMediumDay from '../../assets/anims/rainFogMediumDay.svg'

const ThunderstormDay: React.FC = () => {
  const [flash, setFlash] = useState(false)

  useEffect(() => {
    let id: number
    const tick = () => {
      const delay = 2000 + Math.random() * 5000
      id = window.setTimeout(() => {
        setFlash(true)
        window.setTimeout(() => setFlash(false), 100 + Math.random() * 200)
        tick()
      }, delay)
    }
    tick()
    return () => clearTimeout(id)
  }, [])

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
      <img
        src={thunderstormFogDay}
        alt={'fog'}
        className={style.animFogBig}
      ></img>
      <div className={`${style.flashCircle} ${flash ? style.active : ''}`} />
      <div className={style.rainEffect}>
        {[...Array(36)].map((_, i) => (
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

export default ThunderstormDay
