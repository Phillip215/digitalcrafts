import React, { useState } from "react";
// import ClassBased from './components/ClassBased';
import FunctionalBased from './components/FunctionalBase';
import UserDets from './components/UserDets'
import './App.css'


function App() {

  const [signUp, setSignUp] = useState("");
  const [details, setDetails] = useState("")

  return (
    <div className="App">
      {/* <ClassBased /> */}
      <FunctionalBased  signUp={signUp} setSignUp={setSignUp} details={details} setDetails={setDetails}/>

      <UserDets details={details} setDetails={setDetails}/>
    </div>
  );
}

export default App;
