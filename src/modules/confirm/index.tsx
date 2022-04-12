import React from 'react';
import { useNavigate } from 'react-router-dom';
import { confirmEmail } from '@core/services/firebase/user';
import useQuery from '@core/hook/useQuery';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useStyles from '@styles/formStyle';

export default function Confirm(): JSX.Element {
  const actionCode = useQuery().get('oobCode') || '';
  const { form, formField, formButtons } = useStyles();
  let navigate = useNavigate();

  React.useEffect(() => {
    confirmEmail(actionCode);
  }, []);

  const confirmHandler = () => {
    navigate('/authorization');
  };

  return (
    <Box
      component="form"
      onSubmit={(event: React.FormEvent<HTMLElement>) => {
        event.preventDefault();
      }}
      sx={form}
    >
      <Paper elevation={1}>
        <Typography variant="h6" component="div" sx={formField}>
          Email confirmation, if no redirection happened, please login.
        </Typography>
        <Box sx={formButtons}>
          <Button onClick={confirmHandler} type="submit" variant="contained">
            Log In
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
