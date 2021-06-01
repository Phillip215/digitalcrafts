import { useSelector, useDispatch } from "react-redux";
import { getTheEmail } from "../action/EmailAction";
import { getTheName } from '../action/NameAction';
import { getTheInfo } from "../action/InfoAction";
import Results from './Results';

const Signup = () => {
  const dispatch = useDispatch()
  const name = useSelector((state)=> state.name);
  const email = useSelector((state)=> state.email);
    return (
	  <div>

	    <h1>Sign Up</h1>
      <input type="text" placeholder="Name"  onChange={(e) => getTheName(dispatch, e.target.value)}/>

      <input type="text" placeholder="Email" onChange={(e) => getTheEmail(dispatch, e.target.value)}/>

      <button onClick={(e) => getTheInfo(dispatch,name, email )}>Sign Up</button>

      <Results />
	  </div>

    );
};

export default Signup;
