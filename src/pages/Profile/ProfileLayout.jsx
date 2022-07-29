import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, NavLink, Outlet } from 'react-router-dom'
import { getUserInfo } from '../../firebase'
import Icon from '../../components/Icon'
import ProfileHeader from './components/ProfileHeader'
import { Helmet } from 'react-helmet'
import ProfileNotFound from './ProfileNotFound'
import './ProfileLayout.scss'

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
    return(
      <>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <ProfileNotFound/>
      </>

    ) 
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
    <>
    <Helmet>
      <title>{user.fullName} (@{user.username}) • Instagram photograph and videos</title>
    </Helmet>
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
    </>
    )
  )
}

export default ProfileLayout