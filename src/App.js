import './App.css';
import React, {useState} from 'react';
import DragBox from './components/DragBox';
import Gate from './components/styled-components/Gate'
import FlexContainer from './components/styled-components/FlexContainer'


function App() {
  const mainStyles = {
    backgroundColor: "red",
    height: "100px",
    width: "100px"
  }
  return (
    <div>
      <FlexContainer>      
        <Gate style={{backgroundColor: "#000000"}}></Gate>
        <DragBox></DragBox>
        <Gate style={{backgroundColor: "#ffffff"}}></Gate>
      </FlexContainer>

    </div>
  );
}

export default App;
