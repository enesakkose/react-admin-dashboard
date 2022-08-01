import React, {useState} from 'react'
import Reply from './Reply'
import ScrollToBottom from 'react-scroll-to-bottom'
import Messages from './Messages'
import './Chat.scss'

function Chat() {

    const [messages, setMessages] = useState([
        {
            from : {
                id: 'dGiHN0P38ogYMBvZ03A3nKdOM7Z2',
                name: 'Galatasaray',
                username: 'Galatasaray',
                avatar: 'https://pbs.twimg.com/profile_images/1527392440637865986/nlXCtnll_400x400.jpg'
            },
            message: 'Hey'
        },
        {
           from : {
               id: '22222222222',
               name: 'Fenerbahçe',
               username: 'Fenerbahçe',
               avatar: 'https://pbs.twimg.com/profile_images/1554100752737619968/4WbgmGRJ_400x400.jpg' 
           },
           message: 'Söyleeee'
        },
        {
            from : {
                id: 'dGiHN0P38ogYMBvZ03A3nKdOM7Z2',
                name: 'Galatasaray',
                username: 'Galatasaray',
                avatar: 'https://pbs.twimg.com/profile_images/1527392440637865986/nlXCtnll_400x400.jpg'
            },
            message: 'tmamam'
        },
        {
            from : {
                id: 'dGiHN0P38ogYMBvZ03A3nKdOM7Z2',
                name: 'Galatasaray',
                username: 'Galatasaray',
                avatar: 'https://pbs.twimg.com/profile_images/1527392440637865986/nlXCtnll_400x400.jpg'
            },
            message: 'ama neden'
        },
        {
            from : {
                id: 'dGiHN0P38ogYMBvZ03A3nKdOM7Z2',
                name: 'Galatasaray',
                username: 'Galatasaray',
                avatar: 'https://pbs.twimg.com/profile_images/1527392440637865986/nlXCtnll_400x400.jpg'
            },
            message: 'Heyyyyyyyyyyy'
        },
        {
            from : {
                id: '22222222222',
                name: 'Fenerbahçe',
                username: 'Fenerbahçe',
                avatar: 'https://pbs.twimg.com/profile_images/1554100752737619968/4WbgmGRJ_400x400.jpg' 
            },
            message: 'Kes sesini'
         },
         {
            from : {
                id: 'dGiHN0P38ogYMBvZ03A3nKdOM7Z2',
                name: 'Galatasaray',
                username: 'Galatasaray',
                avatar: 'https://pbs.twimg.com/profile_images/1527392440637865986/nlXCtnll_400x400.jpg'
            },
            message: 'HeyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyHeyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyHeyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyHeyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyHeyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy enes bana bırakma lütfen amalütfen'
        },
        {
            from : {
                id: 'dGiHN0P38ogYMBvZ03A3nKdOM7Z2',
                name: 'Galatasaray',
                username: 'Galatasaray',
                avatar: 'https://pbs.twimg.com/profile_images/1527392440637865986/nlXCtnll_400x400.jpg'
            },
            message: 'Heyyyyyyyyyyy'
        },
        {
            from : {
                id: '22222222222',
                name: 'Fenerbahçe',
                username: 'Fenerbahçe',
                avatar: 'https://pbs.twimg.com/profile_images/1554100752737619968/4WbgmGRJ_400x400.jpg' 
            },
            message: 'Kes sesini'
         },
         {
            from : {
                id: 'dGiHN0P38ogYMBvZ03A3nKdOM7Z2',
                name: 'Galatasaray',
                username: 'Galatasaray',
                avatar: 'https://pbs.twimg.com/profile_images/1527392440637865986/nlXCtnll_400x400.jpg'
            },
            message: 'Heyyyyyyyyyyy'
        },
        {
            from : {
                id: '22222222222',
                name: 'Fenerbahçe',
                username: 'Fenerbahçe',
                avatar: 'https://pbs.twimg.com/profile_images/1554100752737619968/4WbgmGRJ_400x400.jpg' 
            },
            message: 'Kes sesini'
         },
         {
            from : {
                id: 'dGiHN0P38ogYMBvZ03A3nKdOM7Z2',
                name: 'Galatasaray',
                username: 'Galatasaray',
                avatar: 'https://pbs.twimg.com/profile_images/1527392440637865986/nlXCtnll_400x400.jpg'
            },
            message: 'Heyyyyyyyyyyy'
        },
        {
            from : {
                id: '22222222222',
                name: 'Fenerbahçe',
                username: 'Fenerbahçe',
                avatar: 'https://pbs.twimg.com/profile_images/1554100752737619968/4WbgmGRJ_400x400.jpg' 
            },
            message: 'Kes sesini'
         },
         {
            from : {
                id: 'dGiHN0P38ogYMBvZ03A3nKdOM7Z2',
                name: 'Galatasaray',
                username: 'Galatasaray',
                avatar: 'https://pbs.twimg.com/profile_images/1527392440637865986/nlXCtnll_400x400.jpg'
            },
            message: 'Heyyyyyyyyyyy'
        },
        {
            from : {
                id: '22222222222',
                name: 'Fenerbahçe',
                username: 'Fenerbahçe',
                avatar: 'https://pbs.twimg.com/profile_images/1554100752737619968/4WbgmGRJ_400x400.jpg' 
            },
            message: 'Kes sesini'
         },
    ])

  return (
    <div className='chatArea'>
        <ScrollToBottom className="chatArea__texts">
            <Messages messages={messages} />
        </ScrollToBottom>
        <footer className="chatArea__reply">
            <Reply messages={messages} setMessages={setMessages}/>
        </footer>        
    </div>
  )
}

export default Chat