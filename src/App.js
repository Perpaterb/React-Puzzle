import './App.css';
import React, {useState} from 'react';
import DragBox from './components/DragBox';


function App() {
  const mainStyles = {
    backgroundColor: "red",
    height: "100px",
    width: "100px"
  }
  return (
    <div>
       <DragBox></DragBox>
    </div>
  );
}

export default App;
