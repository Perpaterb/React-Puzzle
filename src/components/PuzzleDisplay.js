import React from 'react'; 
import Box from './styled-components/Box'
import Gate from './styled-components/Gate'
import FlexContainer from './styled-components/FlexContainer'

const PuzzleDisplay = () => {
    return (
        <div style={{backgroundColor: '#ebf2ff', width: "100rem", height: "100rem" }}>
            <FlexContainer>
                <Box style={{backgroundColor: "#dbffd6"}}></Box>
                <Box style={{backgroundColor: "#c4faf8"}}></Box>
                <Box style={{backgroundColor: "#fbe4ff"}}></Box>
                <Box style={{backgroundColor: "#ffffb5"}}></Box>
                <Gate style={{backgroundColor: "#000000"}}></Gate>
                <Gate style={{backgroundColor: "#ffffff"}}></Gate>
            </FlexContainer>
        </div>
    )
}; 

export default PuzzleDisplay