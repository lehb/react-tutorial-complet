import React,{useState,useMemo} from 'react'
import axios from 'axios'
const UseMemoTuto = () => {
const [toggle, setToggle] = useState(false)
const [data, setData] = useState('')
const functionWheavyComputing=(arg)=>{
  console.log('hard computing');
  return arg*100
}
const memoizedValue = useMemo(() => functionWheavyComputing(data), [data])

  return (
<div>
  <p>The value computed is : {memoizedValue}</p>
{toggle&&<h1>toggeled</h1>}
<button onClick={()=>{setToggle(!toggle)}} >toggle</button>

<input type="text" placeholder='insert to change data ...' value={data} onChange={(e)=>{setData(e.target.value)}} />
    </div>
  )
}

export default UseMemoTuto