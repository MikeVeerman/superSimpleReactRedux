import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import store from './stores';

/**
 * Basic start of the app. The Provider is the entry point where the store is injected.
 * ReactDOM renders a Provider with the App (+ store as prop) inside on the "root" element.
 */
ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
);
