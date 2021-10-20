import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function Details(props) {
  const { serviceId } = useParams();
  const [serviceDetails, setServiceDetails] = useState([]);
  const [desired, setDesired] = useState({});

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setServiceDetails(data));
  }, []);

  useEffect(() => {
    setDesired(serviceDetails.map((data) => data.id == serviceId));
  }, [serviceDetails]);

  return (
    <div>
      <h3>Details of Service: {serviceId}</h3>
      <h4>Name: {desired.name}</h4>
    </div>
  );
}

export default Details;
