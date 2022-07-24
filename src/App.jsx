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
  const [redirect, setRedirect] = useState(false)

  useEffect(()=> {
    let timeout = setTimeout(() => {
      setRedirect(true)
    }, 2000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  if(!user && !redirect) {
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
