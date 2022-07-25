import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import './Search.scss'

function Search() {
  return (
    <form className='header__container__search'>
        <span className='search-icon'>
          <FiSearch />
        </span>
        
        <input type="text" placeholder='Search'/>
        <span className='close-icon'>
          <AiOutlineCloseCircle />
        </span>
        
    </form>
  )
}

export default Search