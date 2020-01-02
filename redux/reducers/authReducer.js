import { actionTypes } from '../actions/actionTypes'

// INITIAL STATE
export const initState = {
    isLogined : false
  }

// AUTHENTICATION REDUCERS
export const authReducer = (state = initState, action) => {
    switch (action.type) {
      case actionTypes.SET_LANGUAGE:
          console.log("SET_LANGUAGE ACTION")
        return Object.assign({}, state, { isLogined : action.islogined })
      default: return state
    }
  }