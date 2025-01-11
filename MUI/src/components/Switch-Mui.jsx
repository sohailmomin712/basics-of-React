import { Switch } from "@mui/material";

const SwitchMUi = () => {
  const getVal = (e, val) => {
    console.log(val);
  };
  return (
    <div>
      <Switch
        size="medium"
        color="secondary"
        onChange={(e, val) => getVal(e, val)}
      />
    </div>
  );
};

export default SwitchMUi;
