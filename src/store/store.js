import { createStore } from 'redux';
import cardReducer from './reducers/reducer';

const store = createStore(cardReducer);

export default store;
