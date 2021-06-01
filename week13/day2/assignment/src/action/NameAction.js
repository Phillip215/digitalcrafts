import { Get_Name } from '../action-types/NameActionType';

export const getTheName = (dispatch, input) => {
  return dispatch({type: Get_Name, payload:input})
};
