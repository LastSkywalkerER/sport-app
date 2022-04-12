import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { clearError } from '@core/store/errorSlice';
import { clearSuccess } from '@core/store/successSlice';
import useStyles from './messageStyle';
import { removeListener } from 'process';

export default function UserMessage() {
  const success = useSelector((state: RootStateOrAny) => state.success.message);
  const error = useSelector((state: RootStateOrAny) => state.error.message);
  const messageList = [
    ...error.map((message: string) => ({ title: 'error', message })),
    ...success.map((message: string) => ({ title: 'success', message })),
  ];
  const dispatch = useDispatch();
  const { position } = useStyles({ message: messageList });
  const clearTimer = React.useRef(setTimeout(() => {}, 0));

  const clearMessages = () => {
    dispatch(clearError());
    dispatch(clearSuccess());
  };

  React.useEffect(() => {
    if (error.length || success.length) {
      clearTimeout(clearTimer.current);
      clearTimer.current = setTimeout(clearMessages, 10000);
    }
  }, [success, error]);

  return (
    <Stack onClick={clearMessages} sx={position} spacing={2}>
      {messageList.map(({ title, message }, i: number) => (
        <Alert key={`${message}-${i}`} severity={title}>
          {message}
        </Alert>
      ))}
    </Stack>
  );
}
