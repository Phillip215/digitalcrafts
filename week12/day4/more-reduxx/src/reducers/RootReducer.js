import { INSERT_FAKE_GOAT } from "../action-types/action-types"


const initialState = {
  fakeData: [{username: "Phill", height: "5,10"}],
};

function rootReducer(state = initialState,action) {
  switch(action.type) {
    case INSERT_FAKE_GOAT:
      return {...state, fakeData: [{username: "Goat", height: "5,10"}] };
      default:
        return state
  }
};

export default rootReducer
