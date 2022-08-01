import React,{ useEffect, useState } from 'react'
import { useRoutes } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import ProfileLayout from './pages/Profile/ProfileLayout'
import ProfilePost from './pages/Profile/ProfilePost'
import ProfileTags from './pages/Profile/ProfileTags'
import Auth from './pages/Auth'
import Login from './pages/Login'
import { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'
import Loader from './components/Loader'
import Accounts from './pages/Accounts'
import Signup from './pages/Signup'
import Layout from './pages/Layout'
import Home from './pages/Home'
import './App.scss'
import InboxLayout from './pages/Inbox/InboxLayout'
import Inbox from './pages/Inbox/Inbox'
import ChatLayout from './pages/Inbox/Chat/ChatLayout'


const routes = [
  {
      path: '/',
      element: <Layout />,
      auth: true,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: ':username',
          element: <ProfileLayout/>,
          children: [
            {
            index: true,
            element: <ProfilePost/>
            },
            {
              path: 'tagged',
              element: <ProfileTags/>
            }
          ]
        },
        {
          path: 'inbox',
          element: <InboxLayout/>,
          children: [
            {
              index: true,
              element: <Inbox/>
            },
            {
              path: ':conversationId',
              element: <ChatLayout/>
            }
          ]
        }
      ]
  },
  {
    path: '/auth',
    element: <Auth />,
    children: [
      {
        path: 'login',
        element: <Login/>
      }
    ]
  },
  {
    path: '/accounts',
    element: <Accounts/>,
    children: [
      {
        path: 'signup',
        element: <Signup/>
      }
    ]
  }
]

const authCheck = routes => routes.map(route => {
  if(route?.auth) {
    route.element = <PrivateRoute>{route.element}</PrivateRoute>
  }
  if(route?.children) {
    route.children = authCheck(route.children)
  }
  return route
})
  

function App() {

  const { user } = useSelector(state => state.auth)
  const showRoutes = useRoutes(authCheck(routes))




  if(user === null) {
    return <Loader/>
  }

  return  (
    <>
    <Toaster  position='top right'/>
    {showRoutes}
    </>
  )
    
  
}

export default App
