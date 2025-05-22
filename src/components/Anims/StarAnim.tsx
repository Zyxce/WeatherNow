import React from 'react'
import style from '../../styles/components/Anims/StarAnim.module.css'
import starMain from '../../assets/anims/starMain.png'
import starGradient from '../../assets/anims/starGradient.png'
import starBeam from '../../assets/anims/starBeam.png'

const StarAnim: React.FC = () => {
  return (
    <div className={style.animContainer}>
      <>
        <img
          className={`${style.animStar1} ${style.mainStar1}`}
          alt={'star'}
          src={starMain}
        ></img>
        <img
          className={`${style.animStar1} ${style.gradientStar1}`}
          alt={'star'}
          src={starGradient}
        ></img>
        <img
          className={`${style.animStar1} ${style.beamStar1}`}
          alt={'star'}
          src={starBeam}
        ></img>
      </>
      <>
        <img
          className={`${style.animStar2} ${style.mainStar2}`}
          alt={'star'}
          src={starMain}
        ></img>
        <img
          className={`${style.animStar2} ${style.gradientStar2}`}
          alt={'star'}
          src={starGradient}
        ></img>
        <img
          className={`${style.animStar2} ${style.beamStar2}`}
          alt={'star'}
          src={starBeam}
        ></img>
      </>
      <>
        <img
          className={`${style.animStar3} ${style.mainStar3}`}
          alt={'star'}
          src={starMain}
        ></img>
        <img
          className={`${style.animStar3} ${style.gradientStar3}`}
          alt={'star'}
          src={starGradient}
        ></img>
        <img
          className={`${style.animStar3} ${style.beamStar3}`}
          alt={'star'}
          src={starBeam}
        ></img>
      </>
      <>
        <img
          className={`${style.animStar4} ${style.mainStar4}`}
          alt={'star'}
          src={starMain}
        ></img>
        <img
          className={`${style.animStar4} ${style.gradientStar4}`}
          alt={'star'}
          src={starGradient}
        ></img>
        <img
          className={`${style.animStar4} ${style.beamStar4}`}
          alt={'star'}
          src={starBeam}
        ></img>
      </>
      <>
        <img
          className={`${style.animStar5} ${style.mainStar5}`}
          alt={'star'}
          src={starMain}
        ></img>
        <img
          className={`${style.animStar5} ${style.gradientStar5}`}
          alt={'star'}
          src={starGradient}
        ></img>
      </>
      <>
        <img
          className={`${style.animStar6} ${style.mainStar6}`}
          alt={'star'}
          src={starMain}
        ></img>
        <img
          className={`${style.animStar6} ${style.gradientStar6}`}
          alt={'star'}
          src={starGradient}
        ></img>
      </>
    </div>
  )
}

export default StarAnim
