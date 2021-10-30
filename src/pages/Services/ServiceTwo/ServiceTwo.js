import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import ServiceCard from "../ServiceCard/ServiceCard";

const ServiceTwo = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://limitless-hollows-06705.herokuapp.com/services?categories=low"
      )
      .then((res) => {
        setServices(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  console.log(services);
  return (
    <Container id="service_2">
      <Row className="mb-4 mb-md-0 ">
        <Col sm="12" md="8" className="text-start my-5">
          <div className="serviceOne mt-1 mt-md-5 pt-1 pt-md-4">
            <h6 className="fw-bold">SPECIAL OFFERS</h6>
            <h2
              className="display-6 pb-3"
              style={{ borderBottom: "3px solid #ffc107" }}
            >
              <span className="fw-bold">WORLDWIDE </span>
              TOUR PACKAGE
            </h2>
          </div>
        </Col>
      </Row>

      <Row sm="1" md="2" lg="3" xl="4" className="g-4 mb-5">
        {services.length > 0 ? (
          services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))
        ) : (
          <Col sm="2" lg="1" className="mx-auto">
            <Spinner animation="border" variant="secondary" />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default ServiceTwo;
