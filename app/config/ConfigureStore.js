import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Sagas from './../sagas/index';
import reducers from './../reducers/index';

const sagaMiddleware = createSagaMiddleware();
/**
 * Used to set the redux store congfigurations.
 * 
 * @returns {store}  
 */
export default function configureStore() {
  const store = createStore(reducers, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(Sagas);
  return store;
}
