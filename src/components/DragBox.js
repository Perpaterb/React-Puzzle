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

  useEffect(() => {
    if(state.on === true) {
        setState(state => ({
          ...state,
          colour:"#dbffd6"
        }));
    }else{
        setState(state => ({
          ...state,
          colour:"#44014c"
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
