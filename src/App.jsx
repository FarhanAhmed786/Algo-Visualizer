import {useState} from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Visualizer from './components/Visualizer'
// import Test from './components/Test'

function App() {
  const [algorithm,setAlogrithm] = useState('');

  const clickBtn = (algorithm)=>{
      setAlogrithm(algorithm);
  };

  return (
    <>
      {/* <div className="text-cyan-400 text-xxl bg-red-400">Hello Farhan</div>       */}
      <Navbar clickBtn={clickBtn}/>
      <Visualizer algorithm={algorithm}/>
      {/* <Test/> */}
      <div className="text-red-400 text-xxl bg-blue-500">Test div Farhan</div>      
    </>
  )
}

export default App
