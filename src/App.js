import './App.css';
import React, {useState} from 'react';
import BoxDisplay from './components/BoxDisplay';
import BoxForm from './components/BoxForm';

function App() {

  // -------------------STATE VARIABLES------------------
  
  // 1st and Only State var - color of boxes which can change/update
  const[boxes, setBoxes] = useState(
    [
      {color: "red"},
      {color: "blue"},
      {color: "green"},
    ]
  )

  

  //  CREATE BOX - add new box to boxes
  const createBox = (newBoxObj) => {
    console.log(newBoxObj);


    // Long Method
    const copyBoxes = [...boxes];
    copyBoxes.push(newBoxObj);
    setBoxes(copyBoxes)


    //  Short method
    // setBoxes([...boxes, newBoxObj])
  }


  //-------------------DELETE BOX----------------------
  const deleteBox = (deleteIdx) => {
    console.log("app.js deleteIdx ->", deleteIdx)


  /*
    // Long Way to use filter for deleting
    const newFilteredBoxes = boxes.filter( (box, i) => {
      if(i === deleteIdx) {
          return false;
        }
        else {
          return true;
        }
      });
  */


    //Short Way to use filter for deleting
    const newFilteredBoxes = boxes.filter((b, idx) => idx !== deleteIdx ? true : false)
    
    //return idx !== deleteIdx

    setBoxes(newFilteredBoxes)
  }


/*
  //-------------------UPDATE BOX------------------------
  const updateBox = (idx) => {
    // console.log(idx);

    const copyBoxes = [...boxes];
  }
*/


  return (

    <div className="App">

      <h1>Box Form</h1>

      <hr />

      <h1>Boxes</h1>
      {JSON.stringify(boxes)}
      
      <hr />
      <BoxForm createBox={createBox} />
      {
        boxes.map((box, idx) =>{
          return <BoxDisplay 
                  box={box}
                  key={idx}
                  index={idx}
                  deleteBox={deleteBox}
                />
        })
          
      }


    </div>

  );
}

export default App;
