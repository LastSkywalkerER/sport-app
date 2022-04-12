import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signUser } from '@core/services/firebase/user';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import AuthFormInput from '@core/models/authForm';
import { testEmail, testPassword } from '@core/services/firebase/validator';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useStyles from '@styles/formStyle';

export default function Authorization() {
  const [showPassword, setShowPassword] = React.useState(false);
  const { control, handleSubmit } = useForm<AuthFormInput>();
  const { form, formField, formButtons } = useStyles();

  const onSubmit: SubmitHandler<AuthFormInput> = ({ email, password }) => {
    signUser(email, password);
  };

  const handleClickShowPassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleRegisterBtn = () => navigate('/registration');

  let navigate = useNavigate();

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={form}>
      <Paper elevation={1}>
        <Typography sx={formField} variant="h6" noWrap component="h6">
          Authorization page
        </Typography>
        <Controller
          name="email"
          // rules={{ required: true, pattern: testEmail }}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              sx={formField}
              fullWidth
              type="email"
              label="Email"
              variant="outlined"
              {...field}
            />
          )}
        />

        <FormControl sx={formField} fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <Controller
            name="password"
            // rules={{ required: true, pattern: testPassword }}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <OutlinedInput
                {...field}
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            )}
          />
        </FormControl>
        <Box sx={formButtons}>
          <Button type="submit" variant="contained">
            Log in
          </Button>
          <Button onClick={handleRegisterBtn} variant="contained">
            Register
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
