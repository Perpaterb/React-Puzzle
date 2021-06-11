import React, {useState, useEffect} from 'react';
import DragBox from './components/DragBox';
import Gate from './components/styled-components/Gate'
import FlexContainer from './components/styled-components/FlexContainer'
import overlapChecker from './overlapChecker'

const elementArray = [[400,300,'and',false],[600,300,'or',false],[800,300,'xor',false],[1000,300,"not",false],[400,150,"on",true],[400,410,"off",false]]

const BoxParent = (props) => {
    const [state, setState] = useState({
        andBoxOn: false,
        notBoxOn: false,
        orBoxOn: false,
        xorBoxOn: false,
        running: 0,
    });

     const UpdateDetails = (elementDetails) => {
        
        if (elementDetails[2] === 'and') {
            elementArray[0] = elementDetails
        }
        if (elementDetails[2] === 'or') {
            elementArray[1] = elementDetails
        }
        if (elementDetails[2] === 'xor') {
            elementArray[2] = elementDetails
        }
        if (elementDetails[2] === 'not') {
            elementArray[3] = elementDetails
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            let updatedAllElements = overlapChecker(elementArray)
            setState(state => ({
                ...state,
                andBoxOn: updatedAllElements[0][3],
                orBoxOn: updatedAllElements[1][3],
                xorBoxOn: updatedAllElements[2][3],
                notBoxOn: updatedAllElements[3][3],
            }));
        }, 300);
    }, [state.running]);

    useEffect(() => {
        setState(state => ({
            ...state,
            running: state.running + 1
        }));
    }, []);

    return (
        <FlexContainer> 
            <Gate style={{backgroundColor: "#000000",left : 400, top: 410}}><h1 id="gate1">OFF</h1></Gate>
            <Gate style={{backgroundColor: "#ffffff",left : 400, top: 150, zIndex:"-1"}}><h1 id="gate2">ON</h1></Gate>
            <DragBox name="and" x={400} y={300} areYouOn={state.andBoxOn} updateDetails={UpdateDetails}> </DragBox>
            <DragBox name="not" x={600} y={300} areYouOn={state.notBoxOn} updateDetails={UpdateDetails}> </DragBox>
            <DragBox name="or"  x={800} y={300} areYouOn={state.orBoxOn} updateDetails={UpdateDetails}> </DragBox>
            <DragBox name="xor" x={1000} y={300} areYouOn={state.xorBoxOn} updateDetails={UpdateDetails}> </DragBox>
        </FlexContainer> 
    );
};

export default BoxParent;