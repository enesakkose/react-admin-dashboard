import React,{ useEffect, useState } from 'react'
import { useRoutes } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Login from './pages/Login'
import { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'
import './App.scss'
import Loader from './components/Loader'
import Accounts from './pages/Accounts'
import Signup from './pages/Signup'


const routes = [
  {
      path: '/',
      element: <Home />,
      auth: true
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
