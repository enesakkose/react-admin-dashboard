import React, { useEffect, useState } from 'react'
import { useField } from 'formik'
import './Input.scss'
function Input({children, type = 'text', valuesPassword, ...props}) {

    const [field, meta, helpers] = useField(props)
    const [ show, setShow ] = useState(false)
    const [ inputType, setInputType ] = useState(type)

    useEffect(() => {
      if(show){
        setInputType('text')
      }else if (type === 'password'){
        setInputType('password')
      }

    }, [show])



  return (
    <>
        <label>
            <input  type={inputType}  {...field} {...props}/>
            {children}
            {valuesPassword && 
                  <div className="btn">
                    <button type='button' onClick={() => setShow(!show)}>{show ? 'Gizle' : 'Göster'}
                    </button>    
                  </div>
            }
        </label>

    </>
  )
}

export default Input



