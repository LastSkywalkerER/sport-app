import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import MarchTrelloApp from './marchTrelloApp';
import { ThemeProvider } from '@mui/material';
import themes from '@styles/themes';
import { ModalsProvider } from '@core/hook/modalsController';
import modals from '@components/modals';
import { StylesProvider } from '@core/hook/customStyles';

export default function AppWrapper() {
  const themeName = useSelector(
    (state: RootStateOrAny) => state.themeName.value,
  );
  return (
    <ThemeProvider theme={themes[themeName]}>
      <StylesProvider theme={themes[themeName]}>
        <ModalsProvider initialModals={modals}>
          <MarchTrelloApp />
        </ModalsProvider>
      </StylesProvider>
    </ThemeProvider>
  );
}
