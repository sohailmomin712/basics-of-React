import { Box, Button, Container, TextField, Typography } from '@mui/material'
import { useState } from 'react'

const Test = () => {
  const [isSignUp, setIsSignUp] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (isSignUp) {
      console.log("User Signed Up", formData);
      alert("Sign-up Successful");
    } else {
      console.log("User Logged In", formData);
      alert("Login Successful");
    }

    setFormData({ email: "", password: "", confirmPassword: "" });
  }

  return (
    <div>
      <Container maxWidth='sm' style={{ marginTop: '2rem' }}>
        <Box textAlign='center'>
          <Typography variant='h4' gutterBottom>
            {isSignUp ? "Sign Up" : "Login"}
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <TextField
            label='Email'
            type='email'
            name='email'
            fullWidth
            required
            margin='normal'
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            label='Password'
            type='password'
            name='password'
            fullWidth
            required
            margin='normal'
            value={formData.password}
            onChange={handleChange}
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

          <Box>
            <Button sx={{ mt: 2 }} variant='contained' color='primary' fullWidth type="submit">
              {isSignUp ? "Sign Up" : "Login"}
            </Button>
          </Box>
        </form>

        <Box textAlign='center' mt={2}>
          <Typography>
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
            <Button
              variant='text'
              color='secondary'
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Login" : "Sign Up"}
            </Button>
          </Typography>
        </Box>
      </Container>
    </div>
  )
}

export default Test
