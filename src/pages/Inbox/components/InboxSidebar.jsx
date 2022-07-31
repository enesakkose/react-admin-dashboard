import React from 'react'
import { useSelector } from 'react-redux'
import Icon from '../../../components/Icon'
import Button from '../../../components/Button'
import './InboxSidebar.scss'
import InboxChatList from './InboxChatList'

function InboxSidebar() {

  const { user } = useSelector(state => state.auth)

  return (
    <aside className='inboxSidebar'>
        <header className="inboxSidebar__header">
            <div className="inboxSidebar__header__title">
              <div className="inboxSidebar__header__title__user">
                <Button classname='inboxSelect-btn'>
                  {user.username}
                  <Icon className='rotate' name='chevron-down'/>
                </Button>
              </div>
              <Button>
                  <Icon name='new-message' size={20}/>
              </Button>
            </div>
        </header>
        <InboxChatList/>
    </aside>
  )
}

export default InboxSidebar