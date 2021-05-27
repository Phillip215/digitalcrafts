import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { changeFakeData } from '../actions/greetingActions'

const Greet = () => {
  const fakeData = useSelector((state) => state.fakeData)
  const dispatch = useDispatch();

    return (
	<div>
	    <h1>What up!</h1>
      {fakeData.map((data) => (
      <p>{data.username}</p>
      ))}
      <button onClick={() => changeFakeData(dispatch)}>
        Goat
      </button>
	</div>
    );

};

export default Greet;
