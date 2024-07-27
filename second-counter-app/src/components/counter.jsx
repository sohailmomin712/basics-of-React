//make a function//
// from:line 38 import the hook before using it//
import { useState } from "react";
const Counter = () => {
  // write a return statement then and then only it will show//
  // it will show the content u wrote inside it on the UI//
  //also set the initial for the hook and the updated value will be stored in the setCounter//
  const [counter, setCounter] = useState(0);
  // value will be stored in the state here it is counter
  // and set state will update the value
  return (
    <div
      style={{
        border: "2px solid red",
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        padding: "10px",
      }}>

      {/* for whom do we need the counter */}
      <h3
        style={{
          border: "2px solid green",
        }}>Counter For:</h3>


      {/* show the actual count value */}
    <div style={{border: "2px solid black",padding: "5px",}}>
        <h4>Count Value:{counter}</h4>

        {/* make the 2 buttons for increment and decrement respectively */}
    <button
      style={{width: "200px",}}onClick={() => setCounter(counter + 1)}>Inc</button>
        {/* we have to add the onclick event on the button and invoke a function that will add 1 in the intial value and  for decrement it will minus 1 from the value*/}
        <button style={{ width: "200px" }}onClick={() => setCounter(counter - 1)}>Dec</button>
        {/* now we have to store a intial value and the updated value and update it as per the user requirements 
        so we will hook called useState() which stores the initial and final value*/}
      </div>
      
    </div>
  );
};
// now export the counter//
export default Counter;
