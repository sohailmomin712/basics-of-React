import { useState } from "react";
import Student from "./pages/Student";

const App = () => {
  const [name,setName]=useState("sohail")
  return (
    <div className="App">
      <h1>Props in the React </h1>
      <Student name={name}email={"sohail@gmail.com"}other={{ address: "Delhi", mobile: "000" }}
      />
      <button onClick={()=>setName("Sufi")}>Update Name</button>
      {/* <Student
        name={"sufi"}
        email={"sufi@gmail.com"}
        other={{ address: "Mumbai", mobile: "111" }}
      /> */}
    </div>
  );
};

export default App;
