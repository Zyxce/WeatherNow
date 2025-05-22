import React from 'react'
import style from '../../styles/components/Anims/FogNight.module.css'
import moonMain from '../../assets/anims/moonMain.svg'
import fog1 from '../../assets/anims/fog1.svg'
import fog2 from '../../assets/anims/fog2.svg'
import fog3 from '../../assets/anims/fog3.svg'
import fog4 from '../../assets/anims/fog4.svg'
import StarAnim from './StarAnim'

const FogNight: React.FC = () => {
  return (
    <div className={style.animContainer}>
      <img src={moonMain} alt={'moon'} className={style.animMoon}></img>
      <>
        {[fog1].map((src, i) => (
          <React.Fragment key={i}>
            <img
              src={src}
              alt="fog"
              className={`${style.fog} ${style[`fog${i + 1}`]} 
              `}
            />
            <img
              src={src}
              alt="fog"
              className={`${style.fog} ${style[`fog${i + 1}`]} ${
                style.cloneleft
              }`}
            />
          </React.Fragment>
        ))}
        {[fog3].map((src, i) => (
          <React.Fragment key={i}>
            <img
              src={src}
              alt="fog"
              className={`${style.fog} ${style[`fog${i + 3}`]} 
              `}
            />
            <img
              src={src}
              alt="fog"
              className={`${style.fog} ${style[`fog${i + 3}`]} ${
                style.cloneleft
              }`}
            />
          </React.Fragment>
        ))}
      </>
      <>
        {[fog2].map((src, i) => (
          <React.Fragment key={i}>
            <img
              src={src}
              alt="fog"
              className={`${style.fog} ${style[`fog${i + 2}`]} 
              `}
            />
            <img
              src={src}
              alt="fog"
              className={`${style.fog} ${style[`fog${i + 2}`]} ${
                style.cloneright
              }`}
            />
          </React.Fragment>
        ))}
        {[fog4].map((src, i) => (
          <React.Fragment key={i}>
            <img
              src={src}
              alt="fog"
              className={`${style.fog} ${style[`fog${i + 4}`]} 
              `}
            />
            <img
              src={src}
              alt="fog"
              className={`${style.fog} ${style[`fog${i + 4}`]} ${
                style.cloneright
              }`}
            />
          </React.Fragment>
        ))}
      </>
      <StarAnim />
    </div>
  )
}

export default FogNight
