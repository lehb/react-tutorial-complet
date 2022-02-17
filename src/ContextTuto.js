import React,{useState, createContext} from 'react'
import Login from './Login'
import User from './User'
export const AppContext= createContext(null)
const ContextTuto = () => {
    const [user, setUser] = useState('no user logged in')
  return (
    <AppContext.Provider value={{user,setUser}}>
    <Login />
    <User/>
    </AppContext.Provider>
  )
}

export default ContextTuto