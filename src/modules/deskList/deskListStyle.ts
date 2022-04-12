import { makeStyles } from '@core/hook/customStyles';

const useStyles = makeStyles({
  listBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '5%',
    flexWrap: 'wrap',
    '& > :not(style)': {
      m: 1,
      padding: '30px',
      width: { xs: '90%', md: '40%' },
    },
  },
  listWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  addDeskBtn: { minWidth: 'min-content' },
  list: { width: '100%' },
  listItem: { cursor: 'pointer' },
});

export default useStyles;
