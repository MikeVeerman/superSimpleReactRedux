/**
 * A store is a main "redux state". In this case, a store is created based
 * on the RootReducer in reducers/index.js
 */
import { createStore } from 'redux';
import reducer from '../reducers';

export default createStore(reducer);