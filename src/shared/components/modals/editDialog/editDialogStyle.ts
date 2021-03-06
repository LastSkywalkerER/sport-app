import { makeStyles } from '@core/hook/customStyles';
import { ThemeOptions } from '@mui/material';

const useStyles = makeStyles((theme: ThemeOptions) => ({
  button: {
    color: theme?.palette?.text?.primary,
  },
}));

export default useStyles;
