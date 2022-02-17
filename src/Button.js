import React,{useState} from 'react'

const Button = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <>
    <button onClick={()=>{
        setToggle(!toggle)
    }} >button from child</button>
    {toggle &&<span>Toggle</span>}
    </>
  )
}

export default Button