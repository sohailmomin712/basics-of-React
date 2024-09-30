import { useState } from "react";

const Hideshow = () => {
  const [status, setStatus] = useState(true);

  return (
    <div className="container">
      {status ? <h1>Showing Hello World</h1> : null}

      <button onClick={() => setStatus(false)}>Hide</button>
      <button onClick={() => setStatus(true)}>Show</button>
    </div>
  );
};

export default Hideshow;
