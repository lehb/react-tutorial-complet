import React,{useState} from 'react'

const UseStateTuto = () => {
  const [count,setCount]=useState(0)
const [name, setName] = useState('')
  const incrementCount=()=>{
      setCount(prevCount=> prevCount+1)
  }
  const decrementCount=()=>{
    setCount(prevCount=> prevCount-1)
}
const handleChange=event=>{
setName(event.target.value)
}
    return ( <>
        <h1 > {count} </h1> <button onClick={incrementCount} > Increment </button >
        <button onClick={decrementCount} > decrement </button >
        <h1 > {'the name is'  + name} </h1>
        <input placeholder='enter somthing ' onChange={handleChange} value={name}/>

        </>
    )
}

export default UseStateTuto