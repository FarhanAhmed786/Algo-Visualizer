// import React from 'react'
// import Navbar from "./Navbar"
// import isVisible from "./Navbar"
import Merge from "./Merge";
import Bubble from "./Bubble";
import "./Visualizer.css"
// eslint-disable-next-line react/prop-types
export default function Visualizer({algorithm}) {
  if(algorithm === ''){
    return null;
  }
  
  return (
    <>
      {algorithm === "merge" && <div><Merge/></div>}
      {algorithm === "selection" && <div>this is Selection Sort</div>}
      {algorithm === "bubble" && <div><Bubble/></div>}
      {algorithm === "quick" && <div>this is quick Sort</div>}
      
      <div className="controls mb-2 h-1/2 w-full justify-center items-end flex bg-white-700">
        <div className="flex space-x-4">
          <button className="btn btn-hover">Reset Piles</button>
          <button className="btn btn-hover">Sort Piles</button>
        </div>
      </div>
      
    </>
  )
}
