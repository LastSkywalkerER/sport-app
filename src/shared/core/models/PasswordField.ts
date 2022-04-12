export enum ActionTypes {
  SETPROP = 'SETPROP',
  SHOW_PASSWORD = 'SHOW_PASSWORD',
}

export interface PasswordInitialState {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

export interface Action {
  type: ActionTypes;
  payload?: any;
}
