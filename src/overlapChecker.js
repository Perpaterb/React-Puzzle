

const elementArray = [[0,0,'and'],[0,0,'or'],[0,0,'xor'],[0,0,"not"],[300,0,"on"],[300,600,"off"]]

// each component will run this overlapChecker on move
function overlapChecker (elementPos) {

    // update elementArray each time a box is moved
        
        if (elementPos[2] === 'and') {
            elementArray[0] = [elementPos[0],elementPos[1],elementPos[2]]
        }
        if (elementPos[2] === 'or') {
            elementArray[1] = [elementPos[0],elementPos[1],elementPos[2]]
        }
        if (elementPos[2] === 'xor') {
            elementArray[2] = [elementPos[0],elementPos[1],elementPos[2]]
        }
        if (elementPos[2] === 'not') {
            elementArray[3] = [elementPos[0],elementPos[1],elementPos[2]]
        }

    //check for overlap each time a box is moved

    // const overLappingeLement = []
    
    // for (let i = 0; i < elementArray.length; i++) {
    //     const boxBounds1 = [elementArray[i][0],elementArray[i][1],elementArray[i][0]+100,elementArray[i][1]+100]
    //     for (let a = 0; a < elementArray.length; a++) {
    //         if (a !== i ){
    //         const boxBounds2 = elementArray[b].getBoundingClientRect();
    //         if 	(boxBounds1.right < boxBounds2.left || 
    //                     boxBounds1.left > boxBounds2.right || 
    //                     boxBounds1.bottom < boxBounds2.top || 
    //                     boxBounds1.top > boxBounds2.bottom) {
    //                 OverlappingComps.push([boxBounds1,boxBounds2])
    //             }
    //         }
    //     }
    // }

    //pass each component array of components they are overlaping and if they are on or off
    //so each component will have an overlapping array in state "oserlapping"
    //lets say a component is over lapping 3 (2 on 1 off) their array will look like this.
    //state.overlaping = [true ,true, false] or [false ,true, true] . order should make no difference

    // if the component is an "AND"

    // const allEqual = arr => arr.every( v => v === arr[0] )
    // if (allEqual(state.overlaping) === true) {
    //     if (state.overlaping[0]=== true){
    //         //set state.on = ture
    //     } else {
    //         //set state.on = false
    //     }	
    // }else {
    //     //set state.on = false
    // }


};

export default overlapChecker;