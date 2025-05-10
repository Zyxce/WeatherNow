import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../../store/themeSlice'
import { RootState, AppDispatch } from '../../store/store'
import iconDark from '../../assets/icons/weather-theme-dark.svg'
import iconLight from '../../assets/icons/weather-theme-light.svg'
import style from '../../styles/components/Header/ThemeSwitcher.module.css'

const ThemeSwitcher: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <button className={style.switcher} onClick={() => dispatch(toggleTheme())}>
      {/* <img
        className={style.icon}
        src={theme === 'dark' ? iconLight : iconDark}
        alt="Theme icon"
      /> */}
      <div
        className={
          theme === 'dark'
            ? `${style.icon} ${style.iconDark}`
            : `${style.icon} ${style.iconLight}`
        }
      ></div>
    </button>
  )
}

export default ThemeSwitcher
