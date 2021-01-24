import React, { useState } from 'react';
import TicTacToeComponent from "./modules/TicTacToeComponent";


function App() {

  const [mode,setMode] = useState('night');
  const [modeClass,setModeClass] = useState('app-body-night');
  const [modeText,setModeText] = useState('header-text-night');

  const changeMode = (mode) => {
    console.log("Mode : ",mode);
    
    setMode('night');
    if(mode=='day'){
      setModeClass('app-body-day');
      setModeText('header-text-day')
    }
    else {
      setModeClass('app-body-night');
      setModeText('header-text-night')
    } 
  }

  return (
    <div className={modeClass}>
      <div className="row">
        <button className="day-button" onClick={() => changeMode('day')}>Day</button>
        <button className="night-button" onClick={() => changeMode('night')}>Night</button>
      </div>
      <p className={modeText}> Play Tic Tac Toe </p>
      <TicTacToeComponent mode = {mode}></TicTacToeComponent>
      <p>Handcrafted with <i class="em em-heart"></i> by <b><i>Arijit Mukherjee</i></b></p>
    </div>
  );
}

export default App;
