import React from 'react'
import Icon from '../../../components/Icon'
import './None.scss'

function None({name, text}) {
  return (
    <>
    <div className="none">
        <div className="none__icon">
            <Icon name={name} size='34'/>
        </div>
        <h5>{text}</h5>
    </div>
    
      
    </>
  )
}

export default None