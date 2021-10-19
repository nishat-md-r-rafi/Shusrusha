import React from "react";
import { Col, Card } from "react-bootstrap";

function Service({ service }) {
  return (
    <div>
      <Col>
        <Card>
          <Card.Img
            style={{ height: "100%", width: "100%" }}
            variant="top"
            src={service.img}
          />
          <Card.Body>
            <Card.Title>{service.name}</Card.Title>
            <Card.Text>{service.description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}

export default Service;
