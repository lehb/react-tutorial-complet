import React, { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
        showText: state.showText,
      };
    case "toggle":
      return {
          count:state.count,
          showText:!state.showText
      };
    default:
      return state;
  }
};
const useReducerTuto = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({type:"INCREMENT"});
          dispatch({type:"toggle"});

          
        }}
      >
        Increment
      </button>
      {state.showText && <p>show==true</p>}
    </div>
  );
};

export default useReducerTuto;
