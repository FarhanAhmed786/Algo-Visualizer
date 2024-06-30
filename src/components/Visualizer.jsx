// src/components/Visualizer.js
import React, { useState, useEffect } from 'react';
import './Visualizer.css';

const Visualizer = () => {
  const [piles, setPiles] = useState([]);
  const [sorted, setSorted] = useState(false);

  useEffect(() => {
    resetPiles();
  }, []);

  const resetPiles = () => {
    const newPiles = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
    setPiles(newPiles);
    setSorted(false);
  };

  const bubbleSort = async () => {
    let array = [...piles];
    let n = array.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          setPiles([...array]);
          await new Promise(resolve => setTimeout(resolve, 100));
        }
      }
    }
    setSorted(true);
  };

  return (
    <div className="visualizer-container">
      <div className="piles-container">
        {piles.map((value, index) => (
          <div key={index} className="pile" style={{ height: `${value}px` }}>
            {value}
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={resetPiles}>Reset Piles</button>
        <button onClick={bubbleSort} disabled={sorted}>Sort Piles</button>
      </div>
    </div>
  );
};

export default Visualizer;
