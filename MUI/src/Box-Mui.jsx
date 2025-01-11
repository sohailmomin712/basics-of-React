import { Box, Button } from "@mui/material";

const BoxMui = () => {
  return (
    <div>
      <h1>Layout Box in Material UI</h1>
      <Box
        component="span"
        style={{
          color: "black",
          border: "2px solid blue",
          background: "red",
          padding: "10px",
        }}
      >
        <Button style={{ color: "inherit" }}>Click Me</Button>
      </Box>
    </div>
  );
};

export default BoxMui;
