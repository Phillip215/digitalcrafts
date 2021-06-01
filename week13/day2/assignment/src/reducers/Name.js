import { Get_Name } from '../action-types/NameActionType'


const initialState = "";

const name = (state = initialState, action) => {
  switch (action.type) {
    case Get_Name:
      return (state = action.payload);
      default:
        return state
  }
};

export default name;
