import { Get_Info } from '../action-types/InfoTypes'


const initialState = "";

const info = (state = initialState, action) => {
  switch (action.type) {
    case Get_Info:
      return (state = action.payload);
      default:
        return state
  }
};

export default info;
