import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '@core/services/firebase/user';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import RegFormInput from '@core/models/regForm';
import {
  testEmail,
  testPassword,
  testName,
} from '@core/services/firebase/validator';

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

export default function Registration(): JSX.Element {
  const [showPassword, setShowPassword] = React.useState(false);
  const { control, handleSubmit } = useForm<RegFormInput>();
  const { form, formField, formButtons } = useStyles();

  const onSubmit: SubmitHandler<RegFormInput> = ({ name, email, password }) => {
    createUser(name, email, password);
  };

  const handleClickShowPassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleLoginBtn = () => navigate('/authorization');

  let navigate = useNavigate();

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={form}>
      <Paper elevation={1}>
        <Typography variant="h6" noWrap component="div" sx={formField}>
          Registration page
        </Typography>
        <Controller
          name="name"
          // rules={{ required: true, pattern: testName }}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              sx={formField}
              fullWidth
              type="text"
              label="Name"
              variant="outlined"
              {...field}
            />
          )}
        />
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
            Register
          </Button>
          <Button onClick={handleLoginBtn} variant="contained">
            Log in
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
