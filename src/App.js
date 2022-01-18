import './App.css';
import BoxDisplay from './components/BoxDisplay';
import React, {useState} from 'react';

function App() {

  


  /*//ADD BOX FUNCTION
  const addBox = (newBox) => {
    console.log(newBox);
  }*/

  return (

    <div className="App">

      <h1>Box Form</h1>

      <hr />

      <BoxDisplay/>

    </div>

  );
}

export default App;
