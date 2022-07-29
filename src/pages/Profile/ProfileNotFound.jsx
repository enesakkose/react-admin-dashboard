import React from 'react'
import { Link } from 'react-router-dom'
import './ProfileNotFound.scss'

function ProfileNotFound() {
  return (
    <div className='profileNotFound'>
      <h3>Sorry, this page not available</h3>
      <p>The link you clicked might be broken or removed. <Link to='/'>Go Back to Instagram</Link></p>
    </div>
  )
}

export default ProfileNotFound