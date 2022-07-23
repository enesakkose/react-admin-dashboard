import React,{ useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Home from './pages/Home'
import Auth from './pages/Auth'
import './App.scss'
import Login from './pages/Login'

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

  return useRoutes(authCheck(routes))
    
  
}

export default App
