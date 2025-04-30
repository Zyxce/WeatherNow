import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../../store/themeSlice'
import { RootState, AppDispatch } from '../../store/store'
import style from './ThemeSwitcher.module.css'

const ThemeSwitcher: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <button className={style.switcher} onClick={() => dispatch(toggleTheme())}>
      Toggle Theme
    </button>
  )
}

export default ThemeSwitcher
