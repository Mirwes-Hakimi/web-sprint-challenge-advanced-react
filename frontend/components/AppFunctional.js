import React, { useState } from 'react'

// Suggested initial states
const initialMessage = ''
const initialEmail = ''
const initialSteps = 0
const initialIndex = 4 // the index the "B" is at

export default function AppFunctional(props) {
  // THE FOLLOWING HELPERS ARE JUST RECOMMENDATIONS.
  // You can delete them and build your own logic from scratch.
   /// state
 
const [message, setMessage] = useState(initialMessage);
const [email, setEmail] = useState(initialEmail);
const [steps, setSteps] = useState(initialSteps);
const [index, setIndex] = useState(initialIndex);

function getXY(){
  const x = index % 3 + 1;
  const y = Math.floor(index / 3) + 1;

  return [x, y];
}


/// make the movement logic
function getNextIndex(direction){
  if(direction === 'left' && index % 3 !== 0){
    return index - 1;
  } else if (direction === 'right' && index % 3 !== 2){
    return index + 1;
  } else if (direction === 'up' && index % 3 > 2){
    return index - 3;
  } else if ( direction === 'down' && index % 3 < 6){
    return index + 3;
  }
  return index; //// if move is not allowed stay at the same place
}


  






  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">{getXYMessage()}</h3>
        <h3 id="steps">You moved {steps} {steps === 1 ? 'time' : 'times'} times</h3>
      </div>
      <div id="grid">
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
            <div key={idx} className={`square${idx === index ? ' active' : ''}`}>
              {idx === index ? 'B' : null}
            </div>
          ))
        }
      </div>
      <div className="info">
        <h3 id="message">{message}</h3>
      </div>
      <div id="keypad">
        <button id="left" onClick={move}>LEFT</button>
        <button id="up" onClick={move}>UP</button>
        <button id="right" onClick={move}>RIGHT</button>
        <button id="down" onClick={move}>DOWN</button>
        <button id="reset" onClick={reset}>reset</button>
      </div>
      <form onSubmit={onSubmit}>
        <input id="email" type="email" placeholder="type email" value={email} onChange={onChange}></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
