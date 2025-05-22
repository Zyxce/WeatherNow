import React, { useEffect, useState } from 'react'
import style from '../../styles/components/Anims/ThunderstormNight.module.css'
import rainFogSmallNight from '../../assets/anims/rainFogSmallNight.svg'
import thunderstormFogNight from '../../assets/anims/thunderstormFogNight.svg'
import rainFogMediumNight from '../../assets/anims/rainFogMediumNight.svg'
import StarAnim from './StarAnim'

const ThunderstormNight: React.FC = () => {
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
        src={rainFogSmallNight}
        alt={'fog'}
        className={style.animFogSmall}
      ></img>
      <img
        src={rainFogMediumNight}
        alt={'fog'}
        className={style.animFogMedium}
      ></img>
      <img
        src={thunderstormFogNight}
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
      <StarAnim />
    </div>
  )
}

export default ThunderstormNight
