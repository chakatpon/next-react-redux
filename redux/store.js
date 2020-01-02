import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

import reducer from './reducers'
import { INITIAL_STATE } from './initState'

export const initStore = (initialState = INITIAL_STATE ) => 
createStore(
    reducer, 
    initialState, 
    composeWithDevTools(
      applyMiddleware(
      thunkMiddleware,
      logger
    )))