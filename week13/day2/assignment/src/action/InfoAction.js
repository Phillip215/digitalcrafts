import { Get_Info } from '../action-types/InfoTypes';

export const getTheInfo = (dispatch, name, email) => {
  return dispatch({type: Get_Info, payload: {name, email}})
};
