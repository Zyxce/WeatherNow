import React from 'react'
import style from './Header.module.css'
import Logo from './Logo'
import ThemeSwitcher from './ThemeSwitcher'
import LanguageSwitcher from './LanguageSwitcher'
import CitySearch from './CitySearch'

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <div className={style.headerTop}>
        <Logo />
        <div className={style.switchers}>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </div>
      <CitySearch />
    </header>
  )
}

export default Header
