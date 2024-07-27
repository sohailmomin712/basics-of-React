import Counter from "./components/counter";
import { useState } from "react";
//1:first u will have to import the component//
//and use the component inside the return(<counter/>)which is in app function//
//2:then make a input tag

const App = () => {
  //3:set and update the color
  //set and update the name
  //set and update the list i.e array of object//
  const [color, setColor] = useState("");
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  return (
    <div>
      <Counter />
      <div
        style={{
          marginTop: "10px",
          padding: "10px",
          border: "2px solid blue",
        }}
      >
        <input placeholder="enter name" />
        <input placeholder="enter color" />
      </div>
    </div>
  );
};

export default App;
