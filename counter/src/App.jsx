import './App.css'
import { useState } from 'react';

function App() {
  
  // let count = 5;
  let [count,setCount] =useState(5);

  const add = ()=>{
    // count+=1
    if(count===20) return 
    setCount(count+1)
    console.log("added",count)
  }

  const sub = ()=>{
    // count-=1;
    if(count===0){
      return
    } 
    setCount(count-1)
    console.log("decreased",count)
  }

  return (
    <>
      <h1>This is a counter</h1>
      <h3>counter value : {count}</h3>
      <br />
      <button onClick={add}>Add value {count}</button>
      <br />
      <button onClick={sub}>Remove value</button>
    </>
  )
}

export default App
