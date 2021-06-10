import './App.css';
import React, {} from 'react';
import DragBox from './components/DragBox';
import Gate from './components/styled-components/Gate'
import FlexContainer from './components/styled-components/FlexContainer'


function App() {
  
  return (
    <div>
      <FlexContainer>      
        <Gate style={{backgroundColor: "#000000",left : 300, top: 600}}></Gate>
        <Gate style={{backgroundColor: "#ffffff",left : 300, top: 0, zIndex:"-1"}}></Gate>
        <DragBox name="and" x={400} y={200}></DragBox>
        <DragBox name="not" x={600} y={300}></DragBox>
        <DragBox name="or"  x={700} y={400}></DragBox>
        <DragBox name="xor" x={800} y={500}></DragBox>
      </FlexContainer>
    </div>
  );
}

export default App;
