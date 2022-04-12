import React from 'react';
import { test, expect, beforeEach } from '@jest/globals';
import { mount, configure, ReactWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
// import store from "../store/store";
import Authorization from '@modules/authorization';
import Registration from '@modules/registration';
import AppRoutes from './routes';

jest.mock('firebase/app');
jest.mock('firebase/firestore');
jest.mock('firebase/auth');

class AddConstructor {
  constructor() {}
}

type TAdapter = typeof Adapter & typeof AddConstructor;

configure({ adapter: new (Adapter as TAdapter)() });

describe('>>>Routes --- REACT-REDUX (Mount + wrapping in <Provider>)', () => {
  const initialState = {
    authUID: { value: '' },
    deskList: { desks: [] },
    loaders: { mainPage: true },
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);
  let wrapper: ReactWrapper;
  const routes = ['/random', '/registration'];
  let counter = 0;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={[routes[counter++]]}>
          <AppRoutes />
        </MemoryRouter>
      </Provider>,
    );
  });

  test('invalid path should redirect to default page', () => {
    expect(wrapper.find(Registration)).toHaveLength(0);
    expect(wrapper.find(Authorization)).toHaveLength(1);
  });

  test('valid path should not redirect to default page', () => {
    expect(wrapper.find(Registration)).toHaveLength(1);
    expect(wrapper.find(Authorization)).toHaveLength(0);
  });
});
