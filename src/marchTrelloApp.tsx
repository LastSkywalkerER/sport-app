import React from 'react';

import Header from '@components/header/header';
import AppRoutes from '@core/router/routes';

import UserMessage from '@components/userMessage';

import { Box } from '@mui/material';
import useStyles from '@styles/root';

export default function MarchTrelloApp() {
  const { root } = useStyles();

  return (
    <Box sx={root}>
      <Header />
      <UserMessage />
      <AppRoutes />
    </Box>
  );
}
