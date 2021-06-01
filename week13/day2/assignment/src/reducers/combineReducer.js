import { combineReducers } from "redux";
import name from './Name';
import email from './Email'
import info from './Info'

const reducer = combineReducers({
  name,
  email,
  info,
})

export default reducer;
