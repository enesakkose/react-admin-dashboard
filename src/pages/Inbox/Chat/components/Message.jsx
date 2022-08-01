import React from 'react'
import Avatar from '../../../../components/Avatar'
import { useSelector } from 'react-redux/es/exports'
import classNames from 'classnames'
import './Message.scss'

function Message({message}) {

    const { user } = useSelector(state => state.auth)

  return (
    <div className={classNames({
        'message': true,
        'otherSideMessage': user.uid === message.from.id
        })}>
        {user.uid !== message.from.id && 
        <Avatar src={message.from.avatar} width={24} height={24}/>}
        <p className={classNames({
            'message__content': true,
            'message__grayContent': user.uid === message.from.id
            })}>
         {message.message}   
        </p>
        
    </div>
  )
}

export default Message