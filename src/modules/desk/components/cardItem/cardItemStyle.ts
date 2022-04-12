import { makeStyles } from '@core/hook/customStyles';

const useStyles = makeStyles({
  card: { mb: 3 },
  cardTontent: {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'space-between',
  },
  iconButton: { mr: 1 },
});

export default useStyles;
