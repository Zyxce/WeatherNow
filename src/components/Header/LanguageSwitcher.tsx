import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { toggleLanguage } from '../../store/languageSlice'
import { RootState, AppDispatch } from '../../store//store'
import style from '../../styles/components/Header/LanguageSwitcher.module.css'

const LanguageSwitcher: React.FC = () => {
  const language = useSelector((state: RootState) => state.language.language)
  const dispatch = useDispatch<AppDispatch>()
  const { i18n, t } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language, i18n])

  return (
    <button
      className={style.switcher}
      onClick={() => dispatch(toggleLanguage())}
    >
      {t('header.language')}
    </button>
  )
}

export default LanguageSwitcher
