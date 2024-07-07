import { useState } from 'react'
import MyButton from './MyButton';

function Selection() {
	const [tile,setTile]=useState([]);
	const [sorted,setSorted] = useState(false);

	const resetTile = ()=>{
	const newArray = Array.from({length:20},()=>(Math.floor(Math.random()*100)+1));
		setTile(newArray);
		setSorted(!sorted);
	}
	const selectionSort = async (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }
      if (minIdx !== i) {
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        // Simulate delay for visualization
        await new Promise((resolve) => setTimeout(resolve, 500));
        setTile([...arr]); // Update state for visualization
      }
    }
    setSorted(true); // Set sorted state to true
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
      <MyButton resetTile={resetTile} algo={()=>selectionSort([...tile])}/>
    </div>
  )
}

export default Selection