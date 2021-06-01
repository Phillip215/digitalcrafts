import { Get_Email } from '../action-types/EmailActionTypes';

export const getTheEmail = (dispatch, input) => {
  return dispatch({type: Get_Email, payload:input})
};
