import { useState } from "react";
import Counter from "./components/counter";
import CounterList from "./components/counter-list";

const App = () => {
  const [color, setColor] = useState("");
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  const styles = {
    box: { border: "1px solid red", padding: "10px", margin: "auto" },
  };

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div style={styles.box}>
        <CounterList list={list} />
      </div>
      <div style={styles.box}>
        <input placeholder="name" />
        <input placeholder="color" />
        <br />
        <button>submit</button>
      </div>
    </div>
  );
};

export default App;
