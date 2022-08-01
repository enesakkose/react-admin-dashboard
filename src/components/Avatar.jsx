import React from 'react'
import './Avatar.scss'

function Avatar({src, width, height}) {
  return (
    <>
    <img style={{width : width, height: height}} className='avatar' src={src} alt="" />
    </>
  )
}

export default Avatar