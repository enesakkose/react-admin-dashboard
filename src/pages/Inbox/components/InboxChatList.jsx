import React from 'react'
import Button from '../../../components/Button'
import { NavLink, useParams } from 'react-router-dom'
import './InboxChatList.scss'

function InboxChatList() {
    const { conversationId } = useParams()
    const chats = [
        {
            id: 1,
            user: {
              img: 'https://pbs.twimg.com/profile_images/1527392440637865986/nlXCtnll_400x400.jpg',
              name: 'Galatasaray'  
            },
            lastMessage: 'Tamam aldık'
            
        },
        {
            id: 2,
            user: {
              img: 'https://pbs.twimg.com/profile_images/1527392440637865986/nlXCtnll_400x400.jpg',
              name: 'Galatasaray'  
            },
            unread: true,
            lastMessage: 'Tamam aldık'
            
        },
        {
            id: 3,
            user: {
              img: 'https://pbs.twimg.com/profile_images/1527392440637865986/nlXCtnll_400x400.jpg',
              name: 'Galatasaray'  
            },
            lastMessage: 'Tamam aldık'
            
        }
    ]

  return (
    <div className='inboxChatList'>
        <header className='inboxChatList__header'>
            <h4>Messages</h4>
            <Button>
                16 requests
            </Button>
        </header>
        {chats.map((chat) => (
            <NavLink key={chat.id} to={`/inbox/${chat.id}`}>
                <div className={`chat ${+conversationId === chat.id && 'chatActive'}`}>
                    <img src={chat.user.img} alt="" />
                    <div className="chat__info">
                        <h5>{chat.user.name}</h5>
                        <p className={chat.unread && 'bold'}>{chat.lastMessage}</p>
                    </div>
                    {chat.unread && <div className="chat__unread"></div>}
                </div>
            </NavLink>
        ))}
    </div>
  )
}

export default InboxChatList