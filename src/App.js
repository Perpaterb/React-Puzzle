import './App.css';
import React, {useState} from 'react';

import Draggable from './components/Draggable';

function App() {
  const mainStyles = {
    backgroundColor: "red",
    height: "100px",
    width: "100px"
  }
  return (
    <div style={mainStyles}>
      <Draggable></Draggable>
    </div>
  );
}

export default App;
