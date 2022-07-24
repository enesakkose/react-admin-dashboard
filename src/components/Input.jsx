import React, { useEffect, useState } from 'react'
import { useField } from 'formik'
function Input({children, type = 'text', ...props}) {

    const [field, meta, helpers] = useField(props)



  return (
    <>
        <label className={type === 'password' && 'login__form__inputs__password__input'}>
            <input  type={type} {...field} {...props}/>
            {children}
        </label>

    </>
  )
}

export default Input



