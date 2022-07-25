import React from 'react'
import './Or.scss'

function Or({label = 'YA DA'}) {
  return (
    <div className="form__or">
        <div className="form__or__before"></div>
        <div className="form__or__text">{label}</div>
        <div className="form__or__after"></div>
     </div>
  )
}

export default Or