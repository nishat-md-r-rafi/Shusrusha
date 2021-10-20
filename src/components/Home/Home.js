import React from "react";
import { Carousel } from "react-bootstrap";
import About from "../About/About";
import Emergency from "../Emergency/Emergency";
import Services from "../Services/Services";

function Home(props) {
  return (
    <>
      <div className="container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ width: "100%", height: "100" }}
              src="https://image.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h2 style={{ color: "black" }}>24 Hospital</h2>
              <h4 style={{ color: "black" }}>
                We are ready to serve you 24 hours
              </h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://image.freepik.com/free-vector/flat-hand-drawn-patient-taking-medical-examination_52683-57829.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h2 style={{ color: "black" }}>Dedicated Doctor</h2>
              <h4 style={{ color: "black" }}>
                We will try our best with our defecated doctor
              </h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ width: "100%", height: "100%" }}
              src="https://image.freepik.com/free-vector/emergency-isometric_1284-25291.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h2 style={{ color: "black" }}>Emergency</h2>
              <h4 style={{ color: "black" }}>
                We will be Available at your emergency
              </h4>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="container">
          <Services></Services>
        </div>
        <div className="container">
          <Emergency></Emergency>
        </div>
        <div className="container">
          <About></About>
        </div>
      </div>
    </>
  );
}

export default Home;
