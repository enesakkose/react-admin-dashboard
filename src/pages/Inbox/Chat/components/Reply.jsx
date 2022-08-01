import React, {useState, useEffect} from 'react'
import Button from '../../../../components/Button'
import Icon from '../../../../components/Icon'
import './Reply.scss'

function Reply({setMessages}) {
    
    const [ message, setMessage ] = useState('')
    
    const handleText = (e) => {
        setMessage(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setMessages(messages => [
            ...messages,
            {
                from : {
                    id: 'dGiHN0P38ogYMBvZ03A3nKdOM7Z2',
                    name: 'Galatasaray',
                    username: 'Galatasaray',
                    avatar: 'https://pbs.twimg.com/profile_images/1527392440637865986/nlXCtnll_400x400.jpg'
                },
                message
            },
        ])
        setMessage('')
    }

  return (
    <footer className='reply'>
        <form onSubmit={handleSubmit} className="reply__input">
            <Button type='button' classname='emoji-btn'>
                <Icon name='emoji' size={22}/>
            </Button>
            <input type="text" value={message} onChange={handleText} placeholder='Message...'/>
            {message ? (
                <Button type='submit' classname='send-btn'>
                Send
                </Button>) : (
                <div className="share-media">
                    <Button type='button'>
                        <Icon name='picture' size={22}/>
                    </Button>
                    <Button type='button'>
                        <Icon name='heart' size={22}/>
                    </Button> 
                </div>
            )}
        </form>
    </footer>
  )
}

export default Reply