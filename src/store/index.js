import { applyMiddleware, createStore } from 'redux';
import Immutable from 'immutable';
import { combineReducers } from 'redux-immutable';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { immutableRouterForBrowser } from 'redux-little-router/es/immutable';
import reducers from '../redux/rootReducers'; // TODO add root reducers
import rootSaga from '../redux/rootSagas'; // TODO add root sagas

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
  const { reducer: routerReducer, enhancer, middleware: routerMiddleware } = immutableRouterForBrowser({ routes });
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [routerMiddleware, sagaMiddleware];
  const allReducers = {
    ...reducers,
    router: routerReducer
  };
  /* eslint-disable no-unused-vars */
  const initialState = Immutable.Map({});
  /* eslint-enable */
  const store = createStore(
    combineReducers(allReducers),
    composeWithDevTools(enhancer, applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(rootSaga);
  return store;
}