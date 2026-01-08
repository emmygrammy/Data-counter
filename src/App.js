import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
 const [step, setStep] = useState(1);
 const [count, setCount] = useState(0);

 const baseDate = new Date(2027, 6, 17 + count);

  return (
    <>
    <div className="App">
         <br />
      <button onClick={()=>setStep((s)=>s- 1)}>-</button>
      <span>step: {step}</span>
      <button onClick={()=>setStep((s)=>s+ 1)}>+</button>
      <br /> <br />

      {/* // count  */}
      <div>
      <button onClick={()=>setCount(count-step)}>-</button>
      <span>count: {count}</span>
      <button onClick={()=>setCount(count+step)}>+</button>
      </div>
      <br />

      {/* // countDate is 17th June 2027 */}
      <span>{count} from today is {baseDate.toDateString()}</span>



    </div>
    </>
  );
}

export default App;
