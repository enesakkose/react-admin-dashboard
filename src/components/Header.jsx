import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import { logout } from '../firebase'
import './Header.scss'

function Header() {

    


  return (
    <header className='header'>
        <div className="header__container container">
            <Link className='header__container__logo' to='/'>
                <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" />
            </Link>
            <Search/>

            <button onClick={logout}>
                Logout
            </button>
        </div>
    </header>
  )
}

export default Header
