// import React from 'react'

import { useState } from "react";
import MyButton from "./MyButton";

function Merge() {
  const [tile,setTile]=useState([]);
  const [sorted,setSorted] = useState(false);
 
 
    
  const resetTile = ()=>{
    const newArray = Array.from({length:20},()=>(Math.floor(Math.random()*100)+1));
    setTile(newArray);
    setSorted(!sorted);
  }

  const mergeSort = async () => {
    const merge = async (left, right) => {
      let result = [];
      let i = 0;
      let j = 0;
  
      while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
          result.push(left[i]);
          i++;
        } else {
          result.push(right[j]);
          j++;
        }
        await new Promise((resolve) => setTimeout(resolve, 100));
        setTile([...result, ...left.slice(i), ...right.slice(j)]);
      }
  
      
      while (i < left.length) {
        result.push(left[i]);
        i++;
        
        await new Promise((resolve) => setTimeout(resolve, 100));
        setTile([...result, ...left.slice(i), ...right.slice(j)]);
      }
      while (j < right.length) {
        result.push(right[j]);
        j++;
        
        await new Promise((resolve) => setTimeout(resolve, 100));
        setTile([...result, ...left.slice(i), ...right.slice(j)]);
      }
  
      return result;
    };
  
    const mergeSortRecursive = async (array) => {
      const len = array.length;
      if (len <= 1) {
        return array;
      }
  
      const mid = Math.floor(len / 2);
      const left = array.slice(0, mid);
      const right = array.slice(mid);
  
      const sortedLeft = await mergeSortRecursive(left);
      const sortedRight = await mergeSortRecursive(right);
  
      return await merge(sortedLeft, sortedRight);
    };
  
    const sortedArray = await mergeSortRecursive([...tile]);
    setTile(sortedArray);
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
      <MyButton resetTile={resetTile} algo={mergeSort}/>
    </div>
  )
}

export default Merge