import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
 const [step, setStep] = useState(1);
//  const [count, setCount] = useState(0);


function increaseStepClick() {
  setStep(step + 1);
}

function decreaseStepClick() {
  setStep(step - 1);
}
  return (
    <>
    <div className="App">
         <br />
      <button onClick={decreaseStepClick}>-</button>
      <span>step: {step}</span>
      <button onClick={increaseStepClick}>+</button>
      <br /> <br />

      {/* // count  */}
      <div>
      <button>-</button>
      <span>count: 1</span>
      <button>+</button>
      </div>

    </div>
    </>
  );
}

export default App;
