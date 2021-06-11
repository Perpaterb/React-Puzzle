import React, {useState, useEffect} from 'react';
import DragBox from './components/DragBox';
import Gate from './components/styled-components/Gate'
import FlexContainer from './components/styled-components/FlexContainer'
import overlapChecker from './overlapChecker'

const elementArray = [[400,300,'and',false],[600,300,'or',false],[800,300,'xor',false],[1000,300,'not',false],[400,150,'on',true],[400,410,'off',false]]
const winArray = [['and',false,false],['or',false,false],['xor',false,false],['not',false,false]]


const CheckForWin = (updatedAllElements, youWin) => {
    //console.log(winArray)
    if (
        winArray[0][1] === true &&
        winArray[0][2] === true &&
        winArray[1][1] === true &&
        winArray[1][2] === true &&
        winArray[2][1] === true &&
        winArray[2][2] === true &&
        winArray[3][1] === true &&
        winArray[3][2] === true
        ) {
            youWin()
        }
}

const NameCorrect = (name) => {
    for (let i = 0; i < winArray.length; i++) {
        if (winArray[i][0] === name){
            winArray[i][2] = true
        }
    }
}

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
            //check win
            CheckForWin(updatedAllElements, props.youWin)

            //update win array
            winArray[0][1] = updatedAllElements[0][3] //and
            winArray[1][1] = updatedAllElements[1][3] //or
            winArray[2][1] = updatedAllElements[2][3] //xor
            winArray[3][1] = updatedAllElements[3][3] //not

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
            <DragBox name="and" x={400} y={300} areYouOn={state.andBoxOn} updateDetails={UpdateDetails} nameIsCorrect={NameCorrect} > </DragBox>
            <DragBox name="not" x={600} y={300} areYouOn={state.notBoxOn} updateDetails={UpdateDetails} nameIsCorrect={NameCorrect} > </DragBox>
            <DragBox name="or"  x={800} y={300} areYouOn={state.orBoxOn} updateDetails={UpdateDetails} nameIsCorrect={NameCorrect} > </DragBox>
            <DragBox name="xor" x={1000} y={300} areYouOn={state.xorBoxOn} updateDetails={UpdateDetails} nameIsCorrect={NameCorrect} > </DragBox>
        </FlexContainer> 
    );
};

export default BoxParent;