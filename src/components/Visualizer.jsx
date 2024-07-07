
import Merge from "./Merge";
import Bubble from "./Bubble";
import "./Visualizer.css"
import Quick from "./Quick";
import Selection from "./Selection";


// eslint-disable-next-line react/prop-types
function Visualizer({algorithm}) {
  console.log(algorithm);  
  if(algorithm=== ''){
    return null;
  }
  
  return (
    <>
      {algorithm === "merge" && <div><Merge /></div>}
      {algorithm === "selection" && <div><Selection/></div>}
      {algorithm === "bubble" && <div><Bubble /></div>}
      {algorithm === "quick" && <div><Quick/></div>}
    </>
  )
}


export default Visualizer;