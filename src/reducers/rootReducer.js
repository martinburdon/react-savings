import { combineReducers } from 'redux';
import incomings from 'reducers/incomings.js';
import outgoings from 'reducers/outgoings.js';

export default combineReducers({
 incomings,
 outgoings
});
