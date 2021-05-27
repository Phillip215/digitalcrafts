import { MORE_STUFF } from '../action-types/action-types'

const initialState = {
  ohYea: [{hype: ""}],
}

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case MORE_STUFF:
    return {
    ...state,
    ohYea: [{hype:"So Hyped"}]
    };
    default:
    return state;
  }
};

export default rootReducer;
