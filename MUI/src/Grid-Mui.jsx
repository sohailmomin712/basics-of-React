import { Grid2 } from "@mui/material";

const GridMui = () => {
  return (
    <div>
      <Grid2 item xs={12} container spacing={2}>
        <Grid2 item lg={3} sm={6} xs={12} style={{ backgroundColor: "red" }}>
          <h1>Block 1</h1>
        </Grid2>
        <Grid2 item lg={3} sm={6} xs={12} style={{ backgroundColor: "blue" }}>
          <h1>Block 2</h1>
        </Grid2>
        <Grid2 item lg={3} sm={6} xs={12} style={{ backgroundColor: "aqua" }}>
          <h1>Block 3</h1>
        </Grid2>
        <Grid2 item lg={3} sm={6} xs={12} style={{ backgroundColor: "green" }}>
          <h1>Block 4</h1>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default GridMui;
