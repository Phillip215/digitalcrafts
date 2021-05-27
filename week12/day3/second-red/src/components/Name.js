import { useSelector, useDispatch } from "react-redux";
import { NameChange } from "../action/namesAction"

const Names = () => {
  const names = useSelector((state) => state.names);

  const dispatch = useDispatch();

    return (
	<div>
	    <h1>Who Is this?</h1>
      <p>{names}</p>
      <button onClick={() => NameChange(dispatch)}>hmm</button>
	</div>
    );

};

export default Names;
