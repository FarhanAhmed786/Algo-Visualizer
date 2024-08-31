// import React from 'react'

import { useState } from "react";
import MyButton from "./MyButton";

function Bubble() {
  const [tile,setTile]=useState([]);
  const [sorted,setSorted] = useState(false);
  const [speed,setSpeed] = useState(300);
 
    
  const resetTile = ()=>{
    const newArray = Array.from({length:20},()=>(Math.floor(Math.random()*100)+1));
    setTile(newArray);
    setSorted(!sorted);
  }
  
  
  const bubble = async () => {
    let array = [...tile];
    let n = array.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          setTile([...array]);
           await new Promise(resolve => setTimeout(resolve,speed));// can implement speed of the algo 
        }
      }
    }
    setSorted(true);
  };
  return (
    <div className="visualizerContainer">
      <div className="tileContainer h-[450px]">
        {
          tile.map((value,index)=>(
            <div className="pile" key={index} style={{height:`${value*4}px`,width:"3rem"}}>
             {value}
            </div>
          ))
        }
      </div>
      <MyButton resetTile={resetTile} algo={bubble} speed={setSpeed}/>
      {/* <select name="Speed" id="cars" className="text-green-900 rounded-xl p-3">
            <option value="saab">Speed</option>
            <option value="volvo" onClick={()=>(setSpeed(1000))}>slow</option>
            <option value="saab" onClick={()=>(setSpeed(100))}>medium</option>
            <option value="mercedes" onClick={()=>(setSpeed(10))}>fast</option>
          </select> */}
    </div>
      
  )
}

export default Bubble   
