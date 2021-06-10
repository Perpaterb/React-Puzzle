import React, { render, useEffect, useState } from "react"
import { useSpring, to, animated, config } from 'react-spring'
import overlapChecker from '../overlapChecker'
import { scale, dist } from 'vec-la'
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
        }));
    },
  )

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
    let elementPos = [state.x,state.y,props.name]
    overlapChecker(elementPos)
  },);

  return (
    <animated.div
      {...bind()}
      style={{backgroundColor: state.colour , width: "100px", height: "100px", left:state.x , top: state.y, position: 'absolute',}}
    />
  )
};


export default DragBox;
