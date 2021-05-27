import { useSelector, useDispatch } from "react-redux";
import { Add, Subtract } from "../action.js/CountActions";


const Count = () => {
  const numero = useSelector((state) => state.numero)

  const dispatch = useDispatch();
    return (
	<div>
	    <h1>Count</h1>
      <p>{numero}</p>
      <button onClick={()=> Add(dispatch)}>+</button>
      <button onClick={()=> Subtract(dispatch)}>-</button>
	</div>
    );

};

export default Count;
