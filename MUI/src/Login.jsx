// Import necessary dependencies
import { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      console.log("User Signed Up", formData);
      alert("Sign-up Successful");
    } else {
      console.log("User Logged In", formData);
      alert("Login Successful");
    }

    setFormData({ email: "", password: "", confirmPassword: "" });
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
      <Box textAlign="center">
        <Typography variant="h4" gutterBottom>
          {isSignUp ? "Sign Up" : "Login"}
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        {isSignUp && (
          <TextField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
        )}
        <Box mt={2}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            {isSignUp ? "Sign Up" : "Login"}
          </Button>
        </Box>
      </form>
      <Box textAlign="center" mt={2}>
        <Typography>
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <Button
            variant="text"
            color="secondary"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Login" : "Sign Up"}
          </Button>
        </Typography>
      </Box>
    </Container>
  );
}

export default AuthPage;
