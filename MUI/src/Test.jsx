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
    // name = "email" and value = "test@example.com"
  };

  return (
    <div>
      <Container maxWidth='sm' style={{ marginTop: '2rem' }}>
        <Box textAlign='center'>
          <Typography variant='h4' gutterBottom>
            Sign Up / Login
          </Typography>
        </Box>
        <form>
          <TextField label='Email' type='email' name='email' fullWidth
            required
            margin='normal'
            value={formData.email}
            onChange={handleChange}
          >
          </TextField>
          <TextField label='Password' type='password' name='password' fullWidth
            required
            margin='normal'
            value={formData.password}
            onChange={handleChange}
          >
          </TextField>
          <TextField label='Confirm Password' type='password' name='confirmPassword' fullWidth
            required
            margin='normal'
            value={formData.confirmPassword}
            onChange={handleChange}
          >
          </TextField>
          <Box>
            <Button mt={2} variant='contained' color='primary' fullWidth >
              Sign Up
            </Button>
          </Box>
        </form>
        <Box textAlign='center' mt={2}>
          <Typography>
            Already have an account?
            <Button variant='text' color='secondary'
            >
              Login
            </Button>
          </Typography>
        </Box>
      </Container>
    </div>
  )
}

export default Test
