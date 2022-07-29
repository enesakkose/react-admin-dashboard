import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, NavLink,Link, Outlet } from 'react-router-dom'
import { getUserInfo } from '../../firebase'
import Icon from '../../components/Icon'
import ProfileHeader from './ProfileHeader'
import './ProfileLayout.scss'
import ProfileNotFound from './ProfileNotFound'

function ProfileLayout() {
    const { username } = useParams()
    const navigate = useNavigate()
    const [ user, setUser ] = useState(null)
    const [ loading, setLoading ] = useState(true) 
  
    useEffect(() =>{
        getUserInfo(username)
        .then(user => {
          setUser(user)
        })
        .catch(err => {
          setUser(false)
        })
    
    
      }, [])

  if( user === false ) {
    return <ProfileNotFound/>
  }

  if( user === null) {
    return(
      <div>
        Loading...
      </div>
    )
  }

  return user &&(
    ( 
    <div className='profile'>
        <ProfileHeader user={user}/>
        <nav className="profile__post">
        <NavLink  to={`/${username}`} end={true} className={({isActive}) => isActive ? 'active' : ''}>
            <Icon name='post' size='11' />
            POSTS
        </NavLink>
        <NavLink to={`/${username}/tagged`} end={true} className={({isActive}) => isActive ? 'active' : ''}>
            <Icon name='tag'  size='11'/>
            TAGGED
        </NavLink>
        </nav>
        <Outlet/>
    </div>
    )
  )
}

export default ProfileLayout