import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import { useState } from "react";
const CheckBox = () => {
  const [value] = useState([]);
  const GetValue = (e) => {
    const data = value;
    data.push(e.target.value);
    console.log(data)
  };
  return (
    <div>
      <Checkbox color="primary" value="sohail" onChange={(e) => GetValue(e)} />
      <Checkbox color="primary" value="sufi" onChange={(e) => GetValue(e)} />
      <Checkbox color="primary" value="azim" onChange={(e) => GetValue(e)} />
      <Checkbox color="primary" value="kalim" indeterminate onChange={(e) => GetValue(e)}/>
      <Checkbox color="secondary" value="mujju" onChange={(e) => GetValue(e)}
      icon={<FavoriteBorder/>}
      checkedIcon={<Favorite/>}
       />
    </div>
  );
};

export default CheckBox;
