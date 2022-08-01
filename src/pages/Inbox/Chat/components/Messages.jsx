import React from 'react'
import Message from './Message'
import './Messages.scss'

function Messages({messages}) {
  return (
    <>
    {messages.map((message, key) => (
        <Message key={key} message={message}/>
    ))}
    </>
  )
}

export default Messages