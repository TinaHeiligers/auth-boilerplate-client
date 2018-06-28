import { applyMiddleware, createStore } from 'redux';
import Immutable from 'immutable';
import { combineReducers } from 'redux-immutable';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { immutableRouterForBrowser } from 'redux-little-router/es/immutable';
import localReducers from '../redux/rootReducers';
import rootSaga from '../redux/rootSagas';

export default function () {
  // any data to attach to the router key of state when we're on this route
  const routes = {
    '/welcome' : {
      title: 'Welcome',
    },
    '/counter': {
      title: 'Counter',
    },
    '/help': {
      title: 'Help',
    },
  };
  const { reducer, middleware: routerMiddleware, enhancer } = immutableRouterForBrowser({ routes });
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [routerMiddleware, sagaMiddleware];
  /* eslint-disable no-unused-vars */
  const initialState = Immutable.Map({});
  /* eslint-enable */
  const store = createStore(
    combineReducers({ router: reducer, ...localReducers }),
    initialState,
    composeWithDevTools(enhancer, applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(rootSaga);
  return store;
}