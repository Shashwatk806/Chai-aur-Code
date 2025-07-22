import React, { useState } from 'react'

function Counter() {

    let [count,setCount] = useState(0);

function addClick(){
    if(count==20) return;
    setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1); // they will be treated as batch
    // setCount(count+1);
    setCount(prevCount => prevCount+1);
    setCount(prevCount => prevCount+1);
    setCount(prevCount => prevCount+1); // now this will increase+
}

function removeClick(){
    if(count==0) return;
    setCount(count-1);
}

  return (
    <div>
        <button onClick={addClick}>Click to Add</button>
        <button onClick={removeClick}>Click to remove</button>
        <h1>{count}</h1>
    </div>
  )
}

export default Counter