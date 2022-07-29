import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Search from './Search'
import { logout } from '../firebase'
import { useSelector } from 'react-redux'
import Icon from './Icon'
import Button from './Button'
import './Header.scss'

function Header() {

    const { user } = useSelector(state => state.auth)


  return (
    <header className='header'>
        <div className="header__container container">
            <Link className='header__container__logo' to='/'>
                <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" />
            </Link>
            <Search/>
          <nav className="header__container__nav">
            <NavLink to='/'>
                <Icon name='home' size='27'/>
            </NavLink>
            <NavLink to='/inbox'>
                <Icon name='direct' size='27'/>
            </NavLink>
            <NavLink to='/'>
                <Icon name='new' size='27'/>
            </NavLink>
            <NavLink to='/'>
                <Icon name='explore' size='27'/>
            </NavLink>
            <NavLink to='/'>
                <Icon name='heart' size='27'/>
            </NavLink>
            <NavLink className='profile__btn' to={`/${user.username}`}>
               <img src="../no-avatar.jpeg" alt="" />
            </NavLink>
          </nav>
        </div>
    </header>
  )
}

export default Header
