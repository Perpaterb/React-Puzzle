import './App.css';
import React, {useState} from 'react';
import DragBox from './components/DragBox';
import Gate from './components/styled-components/Gate'
import FlexContainer from './components/styled-components/FlexContainer'


function App() {
  
  return (
    <div>
      <FlexContainer>      
        <Gate style={{backgroundColor: "#000000"}}></Gate>
        <DragBox></DragBox>
        <DragBox></DragBox>
        <DragBox></DragBox>
        <DragBox></DragBox>
        <Gate style={{backgroundColor: "#ffffff", zIndex:"-1", bottom: "200px"}}></Gate>
      </FlexContainer>
    </div>
  );
}

export default App;
