import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import style from '../../styles/components/Header/Logo.module.css'
import logoLight from '../../assets/icons/weather-logo-light.svg'
import logoDark from '../../assets/icons/weather-logo-dark.svg'

const Logo: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme)
  const logo = useMemo(() => (theme === 'dark' ? logoDark : logoLight), [theme])

  return (
    <div className={style.logo}>
      <img className={style.logoImg} src={logo} width={'40px'} alt="logo"></img>
      <p className={style.logoText}>WeatherNow</p>
    </div>
  )
}

export default Logo
