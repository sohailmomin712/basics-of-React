import { TextField } from "@mui/material";

const TextFieldMui = () => {
  const GetData = (e) => {
    console.log(e.target.value)
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <h1>Text Field in Material UI</h1>
      <TextField
        label="Enter name"
        color="secondary"
        variant="outlined"
        onChange={(e) => GetData(e)}
      />
      <TextField
        label="Enter password"
        color="success"
        variant="filled"
        type="password"
        onChange={(e) => GetData(e)}
      />
      <TextField
        label="Enter email"
        color="info"
        variant="standard"
        type="email"
        onChange={(e) => GetData(e)}
      />
    </div>
  );
};

export default TextFieldMui;
