import React, { useEffect } from "react";
import { useState } from "react";
import Service from "./Service";
import { Row } from "react-bootstrap";
function Services(props) {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <h3>Our Services</h3>

      <Row xs={1} md={3} className="g-4">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </Row>
    </div>
  );
}

export default Services;
