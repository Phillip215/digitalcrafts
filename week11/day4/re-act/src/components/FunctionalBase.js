import React, { useState } from "react";
import './func.css';

const FunctionalBased = (props) => {

    return (
      <div className='form-div'>
        <div className='More'>

        <h1>Create Account</h1>

          <form action='' >

            <input type='text' onChange={(e) => props.setSignUp(e.target.value)} placeholder='First Name' />

      <br></br>
            <button type='button'>Sign Up</button>

          </form>

          </div>
      </div>
    );

};

export default FunctionalBased;
