import React from 'react'
import Button from './Button'

const ImperativeHandle = () => {
  const handleClick=()=>{
      console.log('hello from parent');
  }
    return (
    <div>
        <button>Button from parent</button>
        <Button onClick={handleClick} />
    </div>
  )
}

export default ImperativeHandle