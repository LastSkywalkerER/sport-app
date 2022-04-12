import { makeStyles } from '@core/hook/customStyles';
import { ThemeOptions } from '@mui/material';

const useStyles = makeStyles((theme: ThemeOptions) => ({
  columnCard: {
    minWidth: 275,
    maxWidth: 300,
    backgroundColor: theme.palette?.secondary?.main,
  },
  cardContent: { mb: 3, display: 'flex', justifyContent: 'space-between' },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconBtn: { mr: 1 },
  innerCard: { minHeight: '50px' },
  addCardBtn: { color: theme?.palette?.text?.primary },
}));

export default useStyles;
