import * as React from "react";
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
  InputAdornment,
  IconButton,
  Container,
  Typography,
  Box,
  Link
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

function CustomEmailField({ value, onChange }) {
  return (
    <TextField
      label="Username"
      name="username"
      type="text"
      size="small"
      required
      fullWidth
      variant="outlined"
      value={value}
      onChange={onChange}
      sx={{
        mb: 2,
        '& .MuiInputBase-root': {
          backgroundColor: '#191825',
          color: '#FFFFFF',
          borderRadius: '8px',
        },
        '& .MuiInputLabel-root': {
          color: '#FFA3FD', // Pink label color
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#865DFF', // Pink border color
          },
          '&:hover fieldset': {
            borderColor: '#FFA3FD', // Pink border color on hover
          },
          '&.Mui-focused fieldset': {
            borderColor: '#FFA3FD', // Pink border color when focused
          },
        },
        '& .MuiInputBase-input::placeholder': {
          color: '#FFA3FD', // Pink placeholder color
        }
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircle fontSize="inherit" />
          </InputAdornment>
        ),
      }}
    />
  );
}

function CustomPasswordField({ showPassword, handleClickShowPassword, handleMouseDownPassword }) {
  return (
    <FormControl sx={{ my: 2 }} fullWidth variant="outlined">
      <InputLabel size="small" htmlFor="outlined-adornment-password">
        Password
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        name="password"
        size="small"
        label="Password"
        sx={{
          backgroundColor: '#191825',
          color: '#FFFFFF',
          '& .MuiInputLabel-root': {
            color: '#FFA3FD', // Pink label color
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#865DFF', // Pink border color
            },
            '&:hover fieldset': {
              borderColor: '#FFA3FD', // Pink border color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: '#FFA3FD', // Pink border color when focused
            },
          },
          '& .MuiInputBase-input::placeholder': {
            color: '#FFA3FD', // Pink placeholder color
          },
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              size="small"
            >
              {showPassword ? (
                <VisibilityOff fontSize="inherit" />
              ) : (
                <Visibility fontSize="inherit" />
              )}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

function CustomButton() {
  return (
    <Button
      type="submit"
      variant="outlined"
      color="info"
      size="small"
      disableElevation
      fullWidth
      sx={{ my: 2, py: 1, borderColor: '#865DFF', color: '#865DFF' }}
    >
      Log In
    </Button>
  );
}

function SignUpLink() {
  return (
    <Typography variant="body2" sx={{ textDecoration: "none", color: '#FFA3FD' }}>
      Don't have an account? <Link href="/signup" sx={{ color: '#FFA3FD' }}>Sign Up</Link>
    </Typography>
  );
}

export default function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [formValues, setFormValues] = React.useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = formValues;

    // Handle login logic here
    alert(`Logging in with username: ${username}`);

    // Navigate to the steppers page
    navigate('/questions');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          bgcolor: '#191825',
          color: '#FFFFFF',
          borderRadius: '8px',
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: "center",
          alignItems: 'center',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)',
          marginTop: '20px',
          height: 'auto',
        }}
      >
        <LockOutlinedIcon fontSize="large" color="primary" sx={{ mb: 2 }} />
        <Typography component="h1" variant="h5" sx={{ color: '#FFA3FD', mb: 3 }}>
          Log In
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <CustomEmailField value={formValues.username} onChange={handleChange} />
          <CustomPasswordField
            showPassword={showPassword}
            handleClickShowPassword={handleClickShowPassword}
            handleMouseDownPassword={handleMouseDownPassword}
          />
          <CustomButton />
        </form>
        <SignUpLink />
      </Box>
    </Container>
  );
}
