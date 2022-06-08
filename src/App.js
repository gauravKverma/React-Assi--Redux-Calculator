import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import './App.css';
import {add,substract,divide,multiply,increment,decrement} from "./store/action"

function App() {
  const dispatch = useDispatch();
  const count= useSelector((state) => state.count)
  const [value, setValue] = useState()

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  
  return (
    <div className="App">
      <h1>Value : {count}</h1> 
      <div className='incrementdiv'>
        <button onClick={() => dispatch(increment())}>Increment</button> <br/>
        <button disabled={count===0} onClick={() => dispatch(decrement())}>Decrement</button> <br/>
      </div>
      <div className='flex'>
        <div className='inputDiv'>
        <input className='input' type="number" onChange={handleChange} placeholder='X'/>
        </div>
         <br/>
        <div className='grid'>
          <button onClick={() => dispatch(add(+(value)))}>Add</button> 
          <button onClick={() => dispatch(substract(+(value)))}>Substract</button> 
          <button onClick={() => dispatch(multiply(+(value)))}>Multiply</button> 
          <button onClick={() => dispatch(divide(+(value)))}>Divide</button></div>
        </div>
    </div>
  );
}

export default App;
