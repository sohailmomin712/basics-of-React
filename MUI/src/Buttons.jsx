import { Button } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useState } from "react";
const Buttons = () => {
  const [color, setColor] = useState("secondary");
  //   const [disableBtn, setDisableBtn] = useState(false);

  const CustomiseBtn = () => {
    setColor("secondary");
    // setDisableBtn(true);
    alert("Button Clicked");
  };
  return (
    <div>
      <h1>Making Buttons Using MUI</h1>
      <Button
        color={color}
        variant="contained"
        // disabled={disableBtn}
        onClick={() => CustomiseBtn()}
        endIcon={<Delete />}>Click Here</Button>
    </div>
  );
};

export default Buttons;
