import { combineReducers } from 'redux';
import { fooReducer } from './fooReducer'
import { langReducer } from './langReducer';
import { authReducer } from './authReducer';

export default combineReducers({
    foo: fooReducer,
    language : langReducer,
    authentication: authReducer
})