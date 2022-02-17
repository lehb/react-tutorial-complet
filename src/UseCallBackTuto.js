import React,{useState,useCallback} from 'react'
import Child from './Child'

const UseCallBackTuto = () => {
  const [data, setData] = useState("initialState")
  const [toggle, setToggle] = useState(false)
 
  const returnData = useCallback(
    () => {
      return data
    },
    [data],
  )
  return (
    <div>
         <Child returnData={returnData}/>   
         <button onClick={()=>{setToggle(!toggle)}}>Toggle</button> 
         {toggle && <h1>Toggeled</h1>}
         <button onClick={()=>{setData('new values')}}>setDtat to see change</button>
    </div>
  )
}

export default UseCallBackTuto