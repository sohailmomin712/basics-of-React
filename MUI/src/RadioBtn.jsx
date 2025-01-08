import { Radio } from "@mui/material";
import { useState } from "react";

const RadioBtn = () => {
  const [gender, setGender] = useState("Male");
  const GetBtnValues = (e) => {
    console.log(e.target.value);
    setGender(e.target.value)
  };
  return (
    <div>
      <h1>Radio Buttons</h1>
      <div>
        <span>Male</span>
        <Radio value="Male" color="primary" checked={gender==="Male"} onChange={(e) => GetBtnValues(e)} />
      </div>

      <div>
        <span>Female</span>
        <Radio
          value="Female"
          color="secondary"
          checked={gender==="Female"} 
          onChange={(e) => GetBtnValues(e)}
        />
      </div>

      <div>
        <span>Other</span>
        <Radio
          value="Other"
          color='default'
          checked={gender==="Other"} 
          onChange={(e) => GetBtnValues(e)}
        />
      </div>
    </div>
  );
};

export default RadioBtn;
