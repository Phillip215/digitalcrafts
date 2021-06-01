import { Get_Email } from '../action-types/EmailActionTypes'


const initialState = "";

const email = (state = initialState, action) => {
  switch (action.type) {
    case Get_Email:
      return (state = action.payload);
      default:
        return state
  }
};

export default email;
