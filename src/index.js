import 'babel-polyfill'; // generator support
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import initStore from './store'; // TODO create the store!
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = initStore();
ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
