import React from 'react'; 
import Box from './styled-components/Box'
import Gate from './styled-components/Gate'

const PuzzleDisplay = () => {
    return (
        <div style={{backgroundColor: '#ebf2ff', width: "100rem", height: "100rem" }}>
            <Box style={{backgroundColor: "#dbffd6"}}></Box>
            <Box style={{backgroundColor: "#c4faf8"}}></Box>
            <Box style={{backgroundColor: "#fbe4ff"}}></Box>
            <Box style={{backgroundColor: "#ffffb5"}}></Box>
            <Gate style={{backgroundColor: "#000000"}}></Gate>
            <Gate style={{backgroundColor: "#ffffff"}}></Gate>
        </div>
    )
}; 

export default PuzzleDisplay