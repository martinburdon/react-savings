import { combineReducers } from 'redux';
import incomingsReducer from 'reducers/incomings.js';
import outgoingsReducer from 'reducers/outgoings.js';

export default combineReducers({
 incomingsReducer,
 outgoingsReducer
});
