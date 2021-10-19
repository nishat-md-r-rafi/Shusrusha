import React from "react";
import { useParams } from "react-router";

function Details(props) {
  const { serviceId } = useParams();
  return (
    <div>
      <h1>Details: {serviceId}</h1>
    </div>
  );
}

export default Details;
