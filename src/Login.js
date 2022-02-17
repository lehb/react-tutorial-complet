import React,{useContext} from 'react'
import {AppContext} from './ContextTuto'
const Login = () => {
    const {setUser}=useContext(AppContext)
  return (
    <div>
        <h1>Login</h1>
        <input type="text" onChange={(event)=>{setUser(event.target.value)}} placeholder='enter user...' />
    </div>
  )
}

export default Login