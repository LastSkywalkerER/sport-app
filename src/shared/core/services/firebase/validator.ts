import store from '@core/store/store';
import { errorOccured } from '@core/store/errorSlice';

export const testEmail =
  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
export const testPassword =
  /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/;
export const testName = /^[A-Za-z][A-Za-z0-9_]{1,14}$/;

export default function validate(
  email: string,
  password: string,
  name?: string,
): boolean {
  if (name || name === '') {
    if (!testName.test(name)) {
      store.dispatch(
        errorOccured(
          'Name must be 2-14 characters with latin letters and numbers',
        ),
      );
      return false;
    }
  }

  if (!testEmail.test(email)) {
    store.dispatch(errorOccured('Incorrect Email'));
    return false;
  }

  if (!testPassword.test(password)) {
    store.dispatch(
      errorOccured(
        'Еhe password must contain latin letters, an uppercase character and a number',
      ),
    );
    return false;
  }

  return true;
}
