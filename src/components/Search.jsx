import React from 'react'
import { FiSearch } from 'react-icons/fi'
import './Search.scss'

function Search() {
  return (
    <form className='header__container__search'>
        <FiSearch/>
        <input type="text" placeholder='Search'/>
    </form>
  )
}

export default Search