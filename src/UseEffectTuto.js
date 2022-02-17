import React,{useEffect,useState} from 'react'
import axios from 'axios'
const UseEffectTuto = () => {
const [data, setData] = useState('')
const [count, setcount] = useState(0)
useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
         .then((res)=>{
             setData(res.data[0].email)
             console.log('api was called')
         })
},[])
    return (
    <div>
{data}
<h2>{count}</h2>
<button onClick={()=>{setcount(count+1)}}>Increment</button>
    </div>
  )
}

export default UseEffectTuto