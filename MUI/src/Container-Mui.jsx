import { Container } from "@mui/material";

const ContainerMui = () => {
  return (
    <div>
      <Container fixed style={{ background: "skyblue" }}>
        <h1>Container Layout in Material UI (Fixed Width)</h1>
      </Container>

      <Container maxWidth="xs" style={{ background: "yellow" }}>
        <h1>Container Layout in Material UI (Extra Small Screen - Phones)</h1>
      </Container>

      <Container maxWidth="sm" style={{ background: "green" }}>
        <h1>Container Layout in Material UI (Small Screen - Tablets)</h1>
      </Container>

      <Container maxWidth="md" style={{ background: "violet" }}>
        <h1>Container Layout in Material UI (Medium Screen - Small Laptops)</h1>
      </Container>

      <Container maxWidth="lg" style={{ background: "orange" }}>
        <h1>Container Layout in Material UI (Large Screen - Desktops)</h1>
      </Container>
    </div>
  );
};

export default ContainerMui;
