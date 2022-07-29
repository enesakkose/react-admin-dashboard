import React from 'react'
import Button from '../../components/Button'
import Icon from '../../components/Icon'
import './ProfileHeader.scss'


function ProfileHeader({user}) {

  return (
    <header className='profileHeader'>
      <div className="profileHeader__photo">
        <img src="../no-avatar.jpeg" alt="" />
      </div>
      <div className="profileHeader__info">
        <div className="profileHeader__info__title">
          <h2>{user.username}</h2>
          <div className="profileHeader__info__title__btn">
            <Button classname='follow__btn'>Follow</Button>
            <Button>
              <Icon name='bottom' size='12'/>
            </Button>
            <Button classname='threedot__btn'>
              <Icon name='threedot' size='24'/>
            </Button>
          </div>
        </div>
        <nav className="profileHeader__info__user">
            <h3>{user.posts} <span>posts</span></h3>
            <h3>{user.followers.length} <span>followers</span></h3>
            <h3>{user.following.length} <span>following</span></h3>
        </nav>
      </div>
      
    </header>
  )
}

export default ProfileHeader