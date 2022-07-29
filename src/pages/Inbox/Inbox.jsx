import React from 'react'
import Button from '../../components/Button'
import Icon from '../../components/Icon'
import './Inbox.scss'

function Inbox() {
  return (
    <div className='inbox'>
        <div className="inbox__empty">
            <Icon name='direct-empty' size='100'/>
            <h3>Your Messages</h3>
            <p>Send private photos and messages to a friend or group</p>
            <Button>Send Messages</Button>
        </div>
    </div>
  )
}

export default Inbox

// todo inbox sidebar to be completed