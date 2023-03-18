import React from 'react'
import UserInfo from './components/UserInfo/UserInfo'
import Dashboard from './Dashboard/Dashboard'
export default function App() {
  return(
    <div>
      <div className="row">
        <UserInfo/>
        <Dashboard/>
      </div>
    </div>
  )
}