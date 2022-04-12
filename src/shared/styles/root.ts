import { makeStyles } from '@core/hook/customStyles';
import { ThemeOptions } from '@mui/material';

const useStyles = makeStyles((theme: ThemeOptions) => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor:
      theme.palette && theme.palette.background
        ? theme.palette.background.default
        : 'white',
  },
}));

export default useStyles;
