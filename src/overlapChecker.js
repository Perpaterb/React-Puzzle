

//const elementArray = [[400,300,'and',false],[600,300,'or',false],[800,300,'xor',false],[1000,300,"not",false],[400,150,"on",true],[400,410,"off",false]]

// each component will run this overlapChecker on move
function overlapChecker (passedElementDetails) {

    let elementArray = passedElementDetails

    // update elementArray each time a box is moved
        
        // if (elementDetails[2] === 'and') {
        //     elementArray[0] = elementDetails
        // }
        // if (elementDetails[2] === 'or') {
        //     elementArray[1] = elementDetails
        // }
        // if (elementDetails[2] === 'xor') {
        //     elementArray[2] = elementDetails
        // }
        // if (elementDetails[2] === 'not') {
        //     elementArray[3] = elementDetails
        // }

    //check for overlap each time a box is moved

    const overappingElement = []
    for (let i = 0; i < elementArray.length -2 ; i++) {
        for (let a = 0; a < elementArray.length; a++) {
            if (a !== i ){
                if(a > 3) {
                    if 	(
                        elementArray[i][0]-100 < elementArray[a][0]+ 200        // (boxBounds1.right < boxBounds2.left || 
                        && 
                        elementArray[i][0]+100 > elementArray[a][0]         // boxBounds1.left > boxBounds2.right || 
                        &&
                        elementArray[i][1]-100 < elementArray[a][1]             // boxBounds1.bottom < boxBounds2.top ||
                        &&
                        elementArray[i][1]+100 > elementArray[a][1]               // boxBounds1.top > boxBounds2.bottom) {
                        ) { overappingElement.push([elementArray[i][2],elementArray[a][2]]) }
                }  else {
                    if 	(
                        elementArray[i][0]-100 < elementArray[a][0]       // (boxBounds1.right < boxBounds2.left || 
                        && 
                        elementArray[i][0]+100 > elementArray[a][0]         // boxBounds1.left > boxBounds2.right || 
                        &&
                        elementArray[i][1]-100 < elementArray[a][1]             // boxBounds1.bottom < boxBounds2.top ||
                        &&
                        elementArray[i][1]+100 > elementArray[a][1]               // boxBounds1.top > boxBounds2.bottom) {
                        ) { overappingElement.push([elementArray[i][2],elementArray[a][2]]) }
                }      
            }                               
        }
    }
  
     
    //OverlappingComps =[[and,or], [and,xor], [or,and], [xor,and]]
    //OverlappingComps =[[and,or,xor],[or,and],[xor,and]]

    let i = overappingElement.length
    if (i > 2) {
        while(i--){
            if (i > 0 ) {
                if (overappingElement[i-1][0] === overappingElement[i][0]){ 
                    for (let a = 1; a < overappingElement[i].length ; a++) {
                        overappingElement[i-1].push(overappingElement[i][a])
                    }
                    overappingElement.splice(i, 1)
                }
            }
        }
    }

    //console.log(overappingElement)

    //pass each component array of components they are overlaping and if they are on or off
    //so each component will have an overlapping array in state "oserlapping"
    //lets say a component is over lapping 3 (2 on 1 off) their array will look like this.
    //state.overlaping = [true ,true, false] or [false ,true, true] . order should make no difference


    // return and logic
    //if (elementDetails[2] === 'and') {
        let andReturned = false
        for (let i = 0; i < overappingElement.length ; i++) {
            if (overappingElement[i][0] ==='and') {
                if (overappingElement[i].length > 2) {
                    let onOffArray = []
                    const array = overappingElement[i]
                    for (let i = 1; i < array.length; i++) {
                        for (let a = 0; a < elementArray.length; a++) {
                            if (array[i] === elementArray[a][2]) {
                                onOffArray.push(elementArray[a][3])
                            }
                        }
                    }
                    const allEqual = array => array.every( v => v === array[0])
                    if (allEqual(onOffArray) === true) {
                        if (onOffArray[0] === true) {
                            andReturned = true
                            elementArray[0][3] = true
                        }
                    }
                }
            }     
        }
        if (andReturned === false) {elementArray[0][3] = false}
    //}

    // return or logic
    //if (elementDetails[2] === 'or') {
        let orReturned = false
        for (let i = 0; i < overappingElement.length ; i++) {
            if (overappingElement[i][0] === 'or') {
                if (overappingElement[i].length > 2) {
                    const array = overappingElement[i]
                    for (let i = 1; i < array.length; i++) {
                        for (let a = 0; a < elementArray.length; a++) {
                            if (array[i] === elementArray[a][2]) {
                                if (elementArray[a][3] === true) {
                                    orReturned = true
                                    elementArray[1][3] = true
                                }
                            }
                        }
                    }
                }
            }     
        }
        if (orReturned === false) {elementArray[1][3] = false}
    //}
    

    // return xor logic odd number of truths more
    // (elementDetails[2] === 'xor') {
        let xorReturned = false
        for (let i = 0; i < overappingElement.length ; i++) {
            if (overappingElement[i][0] ==='xor') {
                if (overappingElement[i].length > 2) {
                    let onOffArray = []
                    const array = overappingElement[i]
                    for (let i = 1; i < array.length; i++) {
                        for (let a = 0; a < elementArray.length; a++) {
                            if (array[i] === elementArray[a][2]) {
                                if (elementArray[a][3] === true) {
                                    onOffArray.push(elementArray[a][3])
                                }
                            }
                        }
                    }
                    if ((onOffArray.length % 2) === 1) {
                        xorReturned = true
                        elementArray[2][3] = true
                    }
                }
            }     
        }
        if (xorReturned === false) {elementArray[2][3] = false}
    //}

    // return not logic
    //if (elementDetails[2] === 'not') {
        let notReturned = false
        for (let i = 0; i < overappingElement.length ; i++) {
            if (overappingElement[i][0] ==='not') {
                const array = overappingElement[i]
                let onOffArray = []
                for (let i = 1; i < array.length; i++) {
                    for (let a = 0; a < elementArray.length; a++) {
                        if (array[i] === elementArray[a][2]) {
                            onOffArray.push(elementArray[a][3])
                        }
                    }
                }
                const allEqual = array => array.every( v => v === array[0])
                if (allEqual(onOffArray) === true) {
                    if (onOffArray[0] === false) {
                        notReturned = true
                        elementArray[3][3] = true
                    }
                }
            }     
        }
        if (notReturned === false) {elementArray[3][3] = false}
    //}
    return elementArray
};

export default overlapChecker;