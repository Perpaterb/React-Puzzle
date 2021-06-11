import './App.css';
import React, {useState} from 'react';
import BoxParent from './BoxParent'



function App() {
  const [state, setState] = useState({
    win: false,
  });

  const YouWin = () => {
    setState(state => ({
          ...state,
        win: true
    }));
  }

  if (state.win === false) {
    return (
      <div>
        <BoxParent youWin={YouWin}>
        </BoxParent>
      </div>
    );
  } else {
    return (
      <div>
        <h1> YOU WIN !!! </h1>
        <h3> The secret code is : we didn't have time for a proper win screen </h3>       
      </div>
    );

  }
}

export default App;
