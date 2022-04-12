import { makeStyles } from '@core/hook/customStyles';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '10%',
    flexWrap: 'wrap',
    '& > :not(style)': {
      margin: 1,
      padding: '30px',
      width: { xs: '90%', md: '40%' },
    },
  },
  formField: { mb: 5 },
  formButtons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});

export default useStyles;
