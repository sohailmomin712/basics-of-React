import { useState } from "react";

const Form = () => {
     const[name,setName] = useState("")
     const[interest,setInterest] = useState("")
     const[tnc,setTnc] = useState(false)

  function getFormData(e) {
    e.preventDefault();
    console.log(name)
    console.log(interest)
    console.log(tnc)
  }

  return (
    <div>
      <form onSubmit={getFormData}>
    <input type="text" placeholder="enter name"  onChange={(e)=>setName(e.target.value)}/> 
    <br /> <br />

        <select onChange={(e)=>setInterest(e.target.value)}>
          <option>Select Options</option>
          <option>Marvel</option>
          <option>DC Comics</option>
        </select>
        <br /> <br />

        <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /> 
        <span>Accept Terms and Conditions</span>
        <br /> <br />

        <button type="submit">Submit</button>
        <button>Clear</button>
      </form>
    </div>
  );
};

export default Form;
