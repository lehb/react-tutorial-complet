import React,{useEffect} from 'react'

const Child = ({returnData}) => {
    useEffect(()=>{
console.log('function called');
    },[returnData])
  return (
    <div>
<h1>{returnData()}</h1>
    </div>
  )
}

export default Child