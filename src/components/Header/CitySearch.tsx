import React from 'react'
import style from './CitySearch.module.css'

const CitySearch: React.FC = () => {
  return (
    <form className={style.formContainer}>
      <input
        className={style.textField}
        type="text"
        placeholder="Search"
      ></input>
    </form>
  )
}

export default CitySearch
