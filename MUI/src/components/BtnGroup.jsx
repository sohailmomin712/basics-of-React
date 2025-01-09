import { Button, ButtonGroup } from "@mui/material";

const BtnGroup = () => {
  return (
    <div>
      <h1>Button Group</h1>
      <ButtonGroup orientation="vertical" color="primary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  );
};

export default BtnGroup;
