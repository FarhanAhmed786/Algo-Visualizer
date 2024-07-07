import { useState } from "react";
import MyButton from "./MyButton";

function Quick() {

  const [tile,setTile]=useState([]);
  const [sorted,setSorted] = useState(false);
 
  const resetTile = ()=>{
    const newArray = Array.from({length:20},()=>(Math.floor(Math.random()*100)+1));
    setTile(newArray);
    setSorted(!sorted);
  }

	const quickSort = async (arr) => {
    const partition = async (arr, low, high) => {
      const pivot = arr[high];
      let i = low - 1;

      for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
          // Simulate delay for visualization
          await new Promise((resolve) => setTimeout(resolve, 100));
          setTile([...arr]); // Update state for visualization
        }
      }

      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      // Simulate delay for visualization
      await new Promise((resolve) => setTimeout(resolve, 200));
      setTile([...arr]); // Update state for visualization

      return i + 1;
    };

    const quickSortRecursive = async (arr, low, high) => {
      if (low < high) {
        const pi = await partition(arr, low, high);
        await quickSortRecursive(arr, low, pi - 1);
        await quickSortRecursive(arr, pi + 1, high);
      }
    };

    await quickSortRecursive(arr, 0, arr.length - 1);
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
			<MyButton resetTile={resetTile} algo={()=>quickSort([...tile])}/>
			</div>
	)
  
}

export default Quick