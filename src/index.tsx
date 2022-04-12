import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@core/services/firebase';
import store from './shared/core/store/store';
import AppWrapper from './appWrapper';

import '@styles/normalize.css';
import './style.sass';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
