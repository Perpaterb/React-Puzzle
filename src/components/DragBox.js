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
        opacity: 1
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


  const [inputField, setInputField] = useState();
  const handleChange = (event) => {
    setInputField(inputField => {
      return {
        ...inputField,
        [event.target.name]: event.target.value
      }
    })
    setState(state => ({
      ...state,
      words: event.target.value,
    }))
  };

let colors = [["#ffffb5", "#f4ff2b"], ["#fbe4ff", "#f148f7"], ["#c4faf8", "#4287f5"], ["#dbffd6", "#3bff3b"]]
  
  useEffect(() => {
    if (props.name === "and") {
      if(state.on === true) {
        setState(state => ({
          ...state,
          colour: colors[0][1],
          opacity: 0.5
        }));
    }else{
        setState(state => ({
          ...state,
          colour: colors[0][0],
          opacity: 1
        }));
    }
  }
    if (props.name === "or") {
      if(state.on === true) {
        setState(state => ({
          ...state,
          colour: colors[1][1],
          opacity: 0.5
        }));
    }else{
        setState(state => ({
          ...state,
          colour: colors[1][0],
          opacity: 1
        }));
    }
  }
    if (props.name === "xor") {
      if(state.on === true) {
        setState(state => ({
          ...state,
          colour: colors[2][1],
          opacity: 0.5
        }));
    }else{
        setState(state => ({
          ...state,
          colour: colors[2][0],
          opacity: 1
        }));
    }
  }
    if (props.name === "not") {
      if(state.on === true) {
        setState(state => ({
          ...state,
          colour: colors[3][1],
          opacity: 0.5
        }));
    }else{
        setState(state => ({
          ...state,
          colour: colors[3][0],
          opacity: 1
        }));
    }
  }
  },[state.on]);

  return (
    <animated.div
      {...bind()}
      style={{backgroundColor: state.colour , width: "100px", height: "100px", left:state.x , top: state.y, position: 'absolute', opacity: state.opacity}}
      >
      <div>
        {(()=>{
          if (state.words !== props.name) {
            return (
              <div>
                <input type="text" name={props.name} onChange={handleChange}
                style={{ width: "30px", backgroundColor: state.colour}}/>
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
