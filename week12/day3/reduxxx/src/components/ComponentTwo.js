import react from 'react';
import { useSelector, useDispatch } from "react-redux";

const ComponentTwo = (props) => {
    const userName = useSelector((state) => state.userName)
    const dispatch = useDispatch()

    return (
	<div>
	    <h1>ComponentTwo</h1>
        <p>{userName}</p>
        <button onClick={() => dispatch({type:"USERNAME_CHANGE"})}>Who</button>
        <button onClick={() => dispatch({type:"ADD"})}>Add</button>
        <button onClick={() => dispatch({type:"SUBTRACT"})}>Subtract</button>
	</div>
    );

};

export default ComponentTwo;
