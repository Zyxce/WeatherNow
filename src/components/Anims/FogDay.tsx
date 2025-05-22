import React from 'react'
import style from '../../styles/components/Anims/FogDay.module.css'
import fog1 from '../../assets/anims/fog1.svg'
import fog2 from '../../assets/anims/fog2.svg'
import fog3 from '../../assets/anims/fog3.svg'
import fog4 from '../../assets/anims/fog4.svg'
import sunMain from '../../assets/anims/sunMain.svg'
import sunFirstGradient from '../../assets/anims/sunFirstGradient.svg'
import sunMidGradient from '../../assets/anims/sunMidGradient.svg'
import sunLastGradient from '../../assets/anims/sunLastGradient.svg'

const FogDay: React.FC = () => {
  return (
    <div className={style.animContainer}>
      <>
        <img
          className={`${style.animSun} ${style.sunMain}`}
          alt={'icon'}
          src={sunMain}
        ></img>
        <img
          className={`${style.animSun} ${style.sunFirstGradient}`}
          alt={'icon'}
          src={sunFirstGradient}
        ></img>
        <img
          className={`${style.animSun} ${style.sunSecondGradient}`}
          alt={'icon'}
          src={sunMidGradient}
        ></img>
        <img
          className={`${style.animSun} ${style.sunLastGradient}`}
          alt={'icon'}
          src={sunLastGradient}
        ></img>
      </>
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
    </div>
  )
}

export default FogDay
