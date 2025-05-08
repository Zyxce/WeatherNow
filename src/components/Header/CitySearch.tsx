import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaSearch } from 'react-icons/fa'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { setSearch } from '../../store/searchSlice'
import style from '../../styles/components/Header/CitySearch.module.css'

const CitySearch: React.FC = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    dispatch(setSearch(inputValue.trim()))
    setInputValue('')
  }
  return (
    <form className={style.formContainer} onSubmit={handleSubmit}>
      <div className={style.inputWrapper}>
        <FaSearch className={style.searchIcon} />
        <input
          className={style.textField}
          type="text"
          placeholder={t('header.search')}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </form>
  )
}

export default CitySearch
