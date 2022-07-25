import React from 'react'
import './SignupOrLogin.scss'

function SignupOrLogin({children}) {
  return (
    <div className="signupOrLogin">
        {children}
    </div>
  )
}

export default SignupOrLogin