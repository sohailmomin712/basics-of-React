import { Slider } from "@mui/material";
import { useState } from "react";

const RangeSlider = () => {
  const handleValue = (e, val) => {
    console.log(val);
    setValue(val)
  };
  const [value, setValue] = useState([0, 30]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Range Slider</h1>
      <div
        style={{
          width: "300px",
          marginTop: "20px",
        }}
      >
        <Slider
          color="success"
          max={200}
          value={value}
          onChange={(e,val) => handleValue(e,val)}
        />
      </div>
    </div>
  );
};

export default RangeSlider;
