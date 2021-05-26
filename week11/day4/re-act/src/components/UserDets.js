import React, { useState } from "react";

const UserDets = (props) => {

  return (
      <div>
        <h1>User Detail</h1>
        <p>{props.setDetails}</p>
      </div>
    );

};

export default UserDets;
