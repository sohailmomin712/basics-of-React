import { Slider } from "@mui/material";
const Sliders = () => {
  const getValue = (e, val) => {
    console.log(val);
    alert(val)
  };
  const sliderMarks = [
    {
      value: 0,
      label: "start",
    },
    {
      value: 50,
      label: "mid",
    },
    {
      value: 100,
      label: "end",
    },
  ];
  return (
    <div>
      <div
        style={{
          width: "300px",
          height: "300px",
          margin: "60px",
        }}
      >
        <Slider
          color="secondary"
          defaultValue={10}
          valueLabelDisplay="auto"
          step={20}
          max={100}
          marks={sliderMarks}
          orientation="vertical"
          onChange={(e, val) => getValue(e, val)}
        />
      </div>
    </div>
  );
};

export default Sliders;
