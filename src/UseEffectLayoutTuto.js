
   
import { useLayoutEffect, useEffect, useRef } from "react";

function UseEffectLayoutTuto() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
 
    inputRef.current.value = "HELLO";
    console.log(inputRef.current.value);
  }, []);

  return (
    <div className="App">
      <input ref={inputRef} value="PEDRO" style={{ width: 400, height: 60 }} />
    </div>
  );
}

export default UseEffectLayoutTuto;