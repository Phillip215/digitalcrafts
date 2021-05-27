import { useSelector, useDispatch } from "react-redux";
import { DoI } from '../action/loveItAction'

const Love = () => {
  const ohYea = useSelector((state) => state.ohYea);
  const dispatch = useDispatch();

    return (
	<div>
	    <h1>I just Love doing code!!!</h1>

      {ohYea.map((data) => (
      <p>{data.hype}</p>
      ))}

      <button onClick={() => DoI(dispatch)}>Clicky</button>
	</div>
    );

};

export default Love;
