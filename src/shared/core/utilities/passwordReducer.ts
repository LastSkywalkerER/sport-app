import {
  PasswordInitialState,
  Action,
  ActionTypes,
} from '@core/models/PasswordField';

export const initialState: PasswordInitialState = {
  amount: '',
  password: '',
  weight: '',
  weightRange: '',
  showPassword: false,
};

export const reducer = (state: PasswordInitialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SETPROP:
      return {
        ...state,
        [action.payload.prop]: action.payload.event.target.value,
      };
    case ActionTypes.SHOW_PASSWORD:
      return {
        ...state,
        showPassword: !state.showPassword,
      };
    default:
      return state;
  }
};

const setProp = (
  prop: keyof PasswordInitialState,
  event: React.ChangeEvent<HTMLInputElement>,
) => {
  const action: Action = {
    type: ActionTypes.SETPROP,
    payload: {
      prop,
      event,
    },
  };

  return action;
};

const showPassword = () => {
  const action: Action = {
    type: ActionTypes.SHOW_PASSWORD,
  };

  return action;
};

export default {
  setProp,
  showPassword,
};
