import React, {useEffect, useState } from "react"
import { animated } from 'react-spring'
import overlapChecker from '../overlapChecker'
import { useDrag } from 'react-use-gesture'

const DragBox = (props) => {
    const [state, setState] = useState({
        on : false,
        x : props.x, 
        y : props.y,
        colour: "#44014c",
    });

  const bind = useDrag(({ args: [originalIndex], offset: [x, y] }) => {

    setState(state => ({
          ...state,
          x: props.x + x,
          y: props.y + y,
          on: true,
        }));
    },
  )

  useEffect(() => {
    let elementPos = [state.x,state.y,props.name]
    overlapChecker(elementPos)
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
    />
  )
};


export default DragBox;
