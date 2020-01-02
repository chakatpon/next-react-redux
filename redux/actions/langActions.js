import { actionTypes } from './actionTypes'


// LANGUAGE ACTIONS
export const setLanguage = language => dispatch => {
  return dispatch({ 
    type: actionTypes.SET_LANGUAGE,
    language
  })
}