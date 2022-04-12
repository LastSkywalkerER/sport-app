import { makeStyles } from '@core/hook/customStyles';
import { ThemeOptions } from '@mui/material';

const useStyles = makeStyles((theme: ThemeOptions) => ({
  container: {
    overflowY: 'scroll',
    height: 'calc(100% - 85px)',
  },
  deskWrapper: { paddingBottom: '10px', overflowX: 'scroll' },
  titleWrapper: { m: 3, display: 'flex', alignItems: 'center' },
  iconMargin: { mr: 1 },
  deskField: {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'flex-start',
    paddingLeft: '2%',
  },
  columnsWrapper: {
    display: 'flex',
    alignItems: 'start',
    '& > :not(style)': {
      mr: 3,
      mb: { xs: 3, md: 0 },
    },
  },
  addColumnBtn: { minWidth: 'min-content' },
  deskTitle: { color: theme?.palette?.text?.primary },
}));

export default useStyles;
