import React from 'react'
import Avatar from '../../../../components/Avatar'
import Button from '../../../../components/Button'
import Icon from '../../../../components/Icon'
import './ChatHeader.scss'

function ChatHeader() {

    const user = 
        {
            id: 1,
            name: 'Enes Akköse',
            avatar: 'https://pbs.twimg.com/profile_images/1527392440637865986/nlXCtnll_400x400.jpg',
            activeInfo: 'Active 27m ago'
        }
    

  return (
    <header className='chatHeader'>
        <Button className="chatHeader__avatar">
         <Avatar src={user.avatar} width={25} height={25}/>
         <div className="chatHeader__avatar__info">
           <h4>{user.name}</h4>
           <p>{user.activeInfo}</p>
         </div>
        </Button>
        <Button classname='chatHeader__infoBtn'>
            <Icon name='info' size={22}/>
        </Button>
    </header>
  )
}

export default ChatHeader