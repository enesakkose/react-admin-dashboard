import React from 'react'
import { Outlet } from 'react-router-dom'
import InboxSidebar from './components/InboxSidebar'
import './InboxLayout.scss'

function InboxLayout() {
  return (
    <div className='inboxLayout'>
      <InboxSidebar/>
      <Outlet/>
    </div>
  )
}

export default InboxLayout