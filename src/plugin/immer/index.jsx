import React from 'react';
import { useImmer, useImmerReducer } from 'use-immer';
const initialState = { salary: 0 };
function reducer(draft, action) {
  switch (action.type) {
    case "increment":
      return void draft.salary++;
    case "decrement":
      if(draft.salary > 0){
        return void draft.salary--;
      }else{
        return initialState;
      }
    default:
      return initialState;
  }
}

const MyImmer = () => {
  const [person, setPerson] = useImmer({
    name: "Jack Ma",
    salary: "I have no interest of Money"
  });

  const setName = (name) => {
    setPerson(draft => {
      draft.name = name;
    })
  };

  const becomeRicher = () => {
    setPerson(draft => {
      draft.salary += "$";
    })
  }

  const [state, dispatch] = useImmerReducer(reducer, initialState);
  return (
    <div>
      <h1>{person.name}</h1>
      <h1>{person.salary}</h1>
      <input
        onChange={(e) => {
          setName(e.target.value)
        }}
        style={{ width: '300px', height: '30px' }}
        value={person.name}
      />
      <br />
      <button onClick={becomeRicher}>Richer</button>

      <hr />
      <div>
        期待工资：{state.salary}k
        <br />
        <button onClick={() => dispatch({type: "increment"})}>+</button>
        <button onClick={() => dispatch({type: "decrement"})}>-</button>
        <button onClick={() => dispatch({type: "reset"})}>重置</button>
      </div>
    </div>
  );
}

export default MyImmer;