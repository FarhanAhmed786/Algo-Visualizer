import bmsit from "../assets/bmslogo.png"
function Navbar() {

  return (
   <>
     <div className="h-15 bg-slate-100 justify-between text-black flex p-5 gap-10 text-xl flex-wrap ">
     <div className="sm:flex-grow-[3] ">
           <a href="https://bmsit.ac.in/"> <img src={bmsit} alt="Hi" className="h-16 w-18 justify-around" /></a>
        </div>    
     <div className="sm:flex-grow-[2] flex space-x-6 flex-wrap justify-center items-center ">
            <a href="#" className="hover:-translate-y-1 hover:text-red-400 transition delay-100 transform">Selection Sort</a>
            <a href="#" className="hover:-translate-y-1 hover:text-red-400 transition delay-100">Bubble Sort</a>
            <a href="#" className="hover:-translate-y-1 hover:text-red-400 transition delay-100">Merge Sort</a>
            <a href="#" className="hover:-translate-y-1 hover:text-red-400 transition delay-100">Quick Sort</a>
        </div>
            
     </div>
   </>
  )
}

export default Navbar
