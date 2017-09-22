// Import React
import React from 'react';
import ReactDOM from 'react-dom';

import store from './store/store';

import './stylesheets/main.scss';

import Root from './containers/Root';

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app')
);
