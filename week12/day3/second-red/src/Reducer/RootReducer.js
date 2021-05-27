import { CHANGE } from '../action-types.js/actionTypes'

const intialState = {
  names: 'A Genius'
}

function rootReducer(state = intialState, action) {
  switch(action.type) {
    case CHANGE:
      return {...state, names: "Phill"}
      default:
        return state;
  }
}

export default rootReducer;
