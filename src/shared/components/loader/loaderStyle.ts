import { makeStyles } from '@core/hook/customStyles';
import { ThemeOptions } from '@mui/material';

const useStyles = makeStyles((theme: ThemeOptions) => ({
  loader: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    m: 0,
    '& span': {
      color: theme.palette?.loader,
    },
  },
}));

export default useStyles;
