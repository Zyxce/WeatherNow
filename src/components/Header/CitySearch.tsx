import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaSearch } from 'react-icons/fa'
import style from '../../styles/components/Header/CitySearch.module.css'

const CitySearch: React.FC = () => {
  const { t } = useTranslation()
  return (
    <form className={style.formContainer}>
      <div className={style.inputWrapper}>
        <FaSearch className={style.searchIcon} />
        <input
          className={style.textField}
          type="text"
          placeholder={t('header.search')}
        />
      </div>
    </form>
  )
}

export default CitySearch
