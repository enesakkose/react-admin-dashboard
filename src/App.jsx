import React,{ useEffect } from 'react'
import { Routes , Route } from 'react-router-dom'
import './App.scss'
import Auth from './pages/Auth'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}>
          <Route path='login' element={<Login/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
