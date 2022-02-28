import { combineReducers } from 'redux';
import messages from './messagesReducer';
import errors from './errors';
import alertReducer from './alertReducer';
import mainReducer from './mainReducer';

export default combineReducers({
    errors,
    messages,
    alertReducer,
    mainReducer,
}); 