import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import useStyles from './loaderStyle';

export default function Loader() {
  const { loader } = useStyles();
  return (
    <Box sx={loader}>
      <CircularProgress />
    </Box>
  );
}
