import {useState} from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Visualizer from './components/Visualizer'

function App() {
  const [algorithm,setAlogrithm] = useState('');

  const clickBtn = (algorithm)=>{
      setAlogrithm(algorithm);
  };
  return (
    <>
      <Navbar clickBtn={clickBtn}/>
      <Visualizer algorithm={algorithm}/>
    </>
  )
}

export default App
