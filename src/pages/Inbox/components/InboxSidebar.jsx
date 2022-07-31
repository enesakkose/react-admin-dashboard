import React from 'react'
import { useSelector } from 'react-redux'
import Icon from '../../../components/Icon'
import Button from '../../../components/Button'
import './InboxSidebar.scss'

function InboxSidebar() {

  const { user } = useSelector(state => state.auth)

  return (
    <aside className='inboxSidebar'>
        <div className="inboxSidebar__header">
            <div className="inboxSidebar__header__title">
              <div className="inboxSidebar__header__title__user">
                <Button classname='inboxSelect-btn'>
                  {user.username}
                  <Icon name='chevron-down'/>
                </Button>
              </div>
              <Button>
                  <Icon name='new-message' size={20}/>
              </Button>
            </div>
        </div>
    </aside>
  )
}

export default InboxSidebar