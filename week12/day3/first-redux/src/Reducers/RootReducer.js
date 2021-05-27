import { PLUS, MINUS } from '../actionTypes.js/action-types'

const initialState = {
  numero: 1,
};

function rootReducer(state = initialState, action) {
  switch(action.type){
    case PLUS:
      return {...state, numero: state.numero + 1};

    case MINUS:
      return {...state, numero: state.numero - 1}

    default:
      return state;
  }
}

export default rootReducer;
