import React,{useContext} from 'react'
import {AppContext} from './ContextTuto'

const User = () => {
const {user} = useContext(AppContext)
  return (
    <div>
        <h2>The user logged in is</h2>
        <h4>{user}</h4>
    
    </div>
  )
}

export default User