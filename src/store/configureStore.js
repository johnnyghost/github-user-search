import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers/';
import sagas from './sagas/';

/**
 * Configure store.
 *
 * @return {Object} store
 */
const configureStore = ():Object => {

  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  const store = createStoreWithMiddleware(reducers);

  sagaMiddleware.run(sagas);
  return store;
}

export default configureStore;
