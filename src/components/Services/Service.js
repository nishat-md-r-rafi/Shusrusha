import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

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
            <Link to={`/detail/${service.id}`}>
              <button>See Details</button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}

export default Service;
