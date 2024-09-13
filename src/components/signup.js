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
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";

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
        },
        '& .MuiInputLabel-root': {
          color: '#FFA3FD',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#865DFF', // Border color when not focused
          },
          '&:hover fieldset': {
            borderColor: '#E384FF', // Border color on hover
          },
          '&.Mui-focused fieldset': {
            borderColor: '#FFA3FD', // Border color when focused
          },
        },
        '& .MuiInputBase-input::placeholder': {
          color: '#E384FF', // Placeholder color
        },
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
      <InputLabel size="small" htmlFor="outlined-adornment-password" sx={{ color: '#FFA3FD' }}>
        Password
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        name="password"
        size="small"
        label="Password"
        placeholder="Enter your password"
        sx={{
          backgroundColor: '#191825',
          color: '#FFFFFF',
          '& .MuiInputLabel-root': {
            color: '#FFA3FD',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#865DFF', // Border color when not focused
            },
            '&:hover fieldset': {
              borderColor: '#E384FF', // Border color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: '#FFA3FD', // Border color when focused
            },
          },
          '& .MuiInputBase-input::placeholder': {
            color: '#E384FF', // Placeholder color
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

function ConfirmPasswordField({ showPassword, handleClickShowPassword, handleMouseDownPassword }) {
  return (
    <FormControl sx={{ my: 2 }} fullWidth variant="outlined">
      <InputLabel size="small" htmlFor="outlined-adornment-confirm-password" sx={{ color: '#FFA3FD' }}>
        Confirm Password
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-confirm-password"
        type={showPassword ? "text" : "password"}
        name="confirmPassword"
        size="small"
        label="Confirm Password"
        placeholder="Confirm your password"
        sx={{
          backgroundColor: '#191825',
          color: '#FFFFFF',
          '& .MuiInputLabel-root': {
            color: '#FFA3FD',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#865DFF', // Border color when not focused
            },
            '&:hover fieldset': {
              borderColor: '#E384FF', // Border color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: '#FFA3FD', // Border color when focused
            },
          },
          '& .MuiInputBase-input::placeholder': {
            color: '#E384FF', // Placeholder color
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
      Sign Up
    </Button>
  );
}

function SignInLink() {
  return (
    <Typography variant="body2" sx={{ textDecoration: "none", color: '#FFA3FD' }}>
      Already have an account? <Link href="/" sx={{ color: '#FFA3FD' }}>Sign In</Link>
    </Typography>
  );
}

export default function SignUpPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [formValues, setFormValues] = React.useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

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
    const { username, password, confirmPassword } = formValues;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Handle signup logic here
    alert(`Signing up with username: ${username}`);
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
          alignItems: 'center',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)',
          marginTop: '20px',
          height: 'auto',
        }}
      >
        <LockOpenOutlinedIcon fontSize="large" color="primary" sx={{ mb: 2 }} />
        <Typography component="h1" variant="h5" sx={{ color: '#FFA3FD', mb: 3 }}>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <CustomEmailField value={formValues.username} onChange={handleChange} />
          <CustomPasswordField
            showPassword={showPassword}
            handleClickShowPassword={handleClickShowPassword}
            handleMouseDownPassword={handleMouseDownPassword}
          />
          <ConfirmPasswordField
            showPassword={showPassword}
            handleClickShowPassword={handleClickShowPassword}
            handleMouseDown={handleMouseDownPassword}
          />
          <CustomButton />
        </form>
        <SignInLink />
      </Box>
    </Container>
  );
}
