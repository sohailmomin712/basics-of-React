import { Select, MenuItem } from "@mui/material";
import { useState } from "react";

const SelectBox = () => {
  const [course, setCourse] = useState();
  const handleCourseValue = (e) => {
    console.log(e.target.value);
    setCourse(e.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Select Box In MUI</h1>
      <div>
        <Select
          defaultValue=""
          value={course}
          onChange={(e) => handleCourseValue(e)}
          style={{ width: "200px" }}
        >
          <MenuItem value="option1">Select Course</MenuItem>
          <MenuItem value="option2">HTML</MenuItem>
          <MenuItem value="option3">Java</MenuItem>
          <MenuItem value="option4">PHP</MenuItem>
          <MenuItem value="option5">Javascript</MenuItem>
        </Select>
      </div>
    </div>
  );
};

export default SelectBox;
