import { actionTypes } from '../actions/actionTypes'

// INITIAL STATE
export const initState = {
    language: 'th'
  }

// LANGUAGE REDUCERS
export const langReducer = (state = initState, action) => {
    switch (action.type) {
      case actionTypes.SET_LANGUAGE:
        return Object.assign({}, state, { language: action.language })
      default: return state
    }
  }