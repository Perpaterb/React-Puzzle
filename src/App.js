import './App.css';
import React, {useState} from 'react';
import PuzzleDisplay from './components/PuzzleDisplay'

import Draggable from './components/Draggable';

function App() {
  const mainStyles = {
    backgroundColor: "red",
    height: "100px",
    width: "100px"
  }
  return (
    <div style={mainStyles}>
      <PuzzleDisplay></PuzzleDisplay>
    </div>
  );
}

export default App;
