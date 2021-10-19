import React from "react";
import { Link } from "react-router-dom";

function NotFound(props) {
  return (
    <div>
      <img
        src="https://image.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg"
        alt=""
        srcset=""
      />
      <br></br>
      <Link to="/">
        <button>Go Back to Home</button>
      </Link>
    </div>
  );
}

export default NotFound;
