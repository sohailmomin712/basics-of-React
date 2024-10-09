//this works without props for update also//
import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);

  useEffect(() => {
    alert("Updated on Count"+ " " +count);
  }, [count]); 
  // basically it works as a condition jispe run hona chahiye [] is bracket// 
  useEffect(() => {
    console.log("Updated on Count"+ " " +data);
  }, [data]); 
  return (
    <div>
      <h1>Display Count : {count}</h1>
      <h2>Display Data : {data}</h2>

      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <button onClick={() => setCount(count + 1)}>Update Count</button>
        <button onClick={() => setData(data + 1)}>Update Data</button>
      </div>
    </div>
  );
};

export default Counter;
