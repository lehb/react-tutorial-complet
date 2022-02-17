import React,{useRef} from 'react'

const UseRefTuto = () => {
    const inputRef= useRef(null)
    const handleClick=()=>{
       inputRef.current.value='';
       inputRef.current.focus();
    }
  return (
    <div>
        <h1>me</h1>
        <input type="text" ref={inputRef} placeholder='Enter name ...' />
        <button onClick={handleClick}>Change name</button>
    </div>
  )
}

export default UseRefTuto