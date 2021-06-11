import React, {useState} from 'react';
import DragBox from './components/DragBox';
import Gate from './components/styled-components/Gate'
import FlexContainer from './components/styled-components/FlexContainer'


const BoxParent = (props) => {
    const [state, setState] = useState({
        andBoxOn: false,
        notBoxOn: false,
        orBoxOn: false,
        xorBoxOn: false,
    });

    const UpdateDetails = (elementDetails) => {
           
        // Update all Drag boxes.
        //console.log(elementDetails)
    }

    return (
        <FlexContainer> 
            <Gate style={{backgroundColor: "#000000",left : 400, top: 410}}><h1 id="gate1">ON</h1></Gate>
            <Gate style={{backgroundColor: "#ffffff",left : 400, top: 150, zIndex:"-1"}}><h1 id="gate2">OFF</h1></Gate>
            <DragBox name="and" x={400} y={300} areYouOn={state.andBoxOn} updateDetails={UpdateDetails}> </DragBox>
            <DragBox name="not" x={600} y={300} areYouOn={state.notBoxOn} updateDetails={UpdateDetails}> </DragBox>
            <DragBox name="or"  x={800} y={300} areYouOn={state.orBoxOn} updateDetails={UpdateDetails}> </DragBox>
            <DragBox name="xor" x={1000} y={300} areYouOn={state.xorBoxOn} updateDetails={UpdateDetails}> </DragBox>
        </FlexContainer> 
    );
};

export default BoxParent;