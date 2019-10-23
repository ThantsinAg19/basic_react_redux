import React from 'react';
import './App.css'

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementPayload, decrementPayload } from './actions'

function App() {

  const counter = useSelector(state => state.counter);
  
  const dispatch = useDispatch();


  return (
    <div className="App">

      <h5> Increment / Decrement </h5>
      <div className={"row"}>
        <button className={"btn_dec"} onClick={() => dispatch(decrement())}> - </button>
         current counter : {counter}
        <button className={"btn_inc"} onClick={() => dispatch(increment())}> + </button>
      </div>

      <h5> Increment / Decrement with payload </h5>
      <div className={"row"}>
        <button className={"btn_dec"} onClick={() => dispatch(decrementPayload(2))}> - </button>
         current counter : {counter}
        <button className={"btn_inc"} onClick={() => dispatch(incrementPayload(2))}> + </button>
      </div>

    </div>
  );
}

export default App;
