import './index.scss';
import { useState } from 'react';


export default function App() {
  const [valueA, setValueA] = useState("");
  const [valueB, setValueB] = useState("");
  const [result, setResult] = useState("");

  const submit =(action) => {
    if (action==="+") {
      setResult (parseInt(valueA) + parseInt(valueB))
    }
    if (action==="-") {
      setResult (parseInt(valueA) - parseInt(valueB))
      
    }
    if (action==="*") {
      setResult (parseInt(valueA) * parseInt(valueB))
      
    }
    if (action==="/") {
      setResult (parseInt(valueA) / parseInt(valueB))
      
    }
  }

 

  return (
    <>
    <div className='calculator'>
    <div className='block1'>
      <h1>Calculator</h1>
      <input type="text" value={valueA} onChange= {(e)=>setValueA(e.target.value)}/>
      <input type="text" value={valueB} onChange= {(e)=>setValueB(e.target.value)}/>
      <button onClick={submit}>=</button>
    </div>
    <div className='block2'>
      <button onClick={()=>submit("+")}>+</button>
      <button onClick={()=>submit("-")}>-</button>
      <button onClick={()=>submit("*")}>*</button>
      <button onClick={()=>submit("/")}>/</button>
    
    </div>
    <div className='result'>Result: {result}</div>
    <button className='clear' onClick={clear} > Clear</button>
    </div>
    </>
  );
}
