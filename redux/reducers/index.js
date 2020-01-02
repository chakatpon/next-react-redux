import { combineReducers } from 'redux';
import { langReducer } from './langReducer';
import { authReducer } from './authReducer';

export default combineReducers({
    language : langReducer,
    authentication: authReducer
})