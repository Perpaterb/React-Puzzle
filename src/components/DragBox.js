import React, {useEffect, useState } from "react"
import { animated } from 'react-spring'
import overlapChecker from '../overlapChecker'
import { useDrag } from 'react-use-gesture'

const DragBox = (props) => {
    const [state, setState] = useState({
        on : props.areYouOn,
        words: "",
        x : props.x, 
        y : props.y,
        colour: "#44014c",
        text:"",
    });

  const bind = useDrag(({ args: [originalIndex], offset: [x, y] }) => {
    
    setState(state => ({
          ...state,
          x: props.x + x,
          y: props.y + y,
        }));
    },
  )

  useEffect(() => {
    let elementDetails = [state.x, state.y, props.name, state.on]
    props.updateDetails(elementDetails)


    let onTester = overlapChecker(elementDetails) //old need to be replaced
    if (onTester !== state.on) {
      setState(state => ({
        ...state,
        on: onTester,
      }));
    }

  });

  let colors = [["#ffffb5", "#f4ff2b"], ["#fbe4ff", "#f148f7"], ["#c4faf8", "#4287f5"], ["#dbffd6", "#3bff3b"]]
  let newColorsArray = [["#ffffb5", "#f4ff2b"], ["#fbe4ff", "#f148f7"], ["#c4faf8", "#4287f5"], ["#dbffd6", "#3bff3b"]]
  let colors1 = ["#ffffb5", "#fbe4ff", "#c4faf8", "#dbffd6"]
  let colors2 = ["#f4ff2b", "#f148f7", "#4287f5", "#3bff3b"]


  useEffect(() => {
    if(state.on === true) {
        setState(state => ({
          ...state,
          colour: colors[0][1]
        }));
    }else{
        setState(state => ({
          ...state,
          colour: colors[0][0]
        }));
    }
  },[state.on]);

  return (
    <animated.div
      {...bind()}
      style={{backgroundColor: state.colour , width: "100px", height: "100px", left:state.x , top: state.y, position: 'absolute',}}
      >
      <div>
        {(()=>{
          if (state.words !== props.name) {
            return (
              <div>
                <input type="text" id="fname" name="fname" style={{ width: "30px", backgroundColor: state.colour}}/>
              </div>
            )
          } else {
            return (<div/>)
          }
        })()}
      </div>
    </animated.div>
  )
};


export default DragBox;
