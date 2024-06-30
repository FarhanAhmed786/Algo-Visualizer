import bmsit from "../assets/bmslogo.png"
import './Navbar.css'
// import Visualizer from "./Visualizer"

// eslint-disable-next-line react/prop-types
function Navbar({clickBtn}) {
  return (
   <>
     <div className="h-15 bg-slate-100 justify-between text-black flex p-5 gap-10 text-xl flex-wrap ">
     <div className="sm:flex-grow-[3] ">
           <a href="https://bmsit.ac.in/"> <img src={bmsit} alt="Hi" className="h-16 w-18 justify-around" /></a>
        </div>    
     <div className="sm:flex-grow-[2] flex space-x-6 flex-wrap justify-center items-center ">
            <button className="btn-hover" onClick={()=>(clickBtn('selection'))}>Selection Sort</button>
            <button className="btn-hover" onClick={()=>(clickBtn('bubble'))}>Bubble Sort</button>
            <button className="btn-hover" onClick={()=>(clickBtn('merge'))}>Merge Sort</button>
            <button className="btn-hover" onClick={()=>(clickBtn('quick'))}>Quick Sort</button>
        </div>
            
     </div>
   </>
  )
}

export default Navbar
