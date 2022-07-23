import React from 'react'
import './Button.scss'

function Button({classname, onClick, children, disabled, type}) {
  return (
    <button type={type} disabled={disabled} className={classname} onClick={onClick}>
        {children}
    </button>
  )
}

export default Button