import React from 'react'
import ChatHeader from './components/ChatHeader'
import Chat from './components/Chat'
import './ChatLayout.scss'

function ChatLayout() {
  return (
    <div className='chatLayout'>
      <ChatHeader/>
      <Chat/>
    </div>
  )
}

export default ChatLayout

