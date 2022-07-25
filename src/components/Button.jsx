import React from 'react'
import './Button.scss'

function Button({classname,  children, type , ...props}) {
  return (
    <button type={type} className={classname} {...props} >
        {children}
    </button>
  )
}

export default Button