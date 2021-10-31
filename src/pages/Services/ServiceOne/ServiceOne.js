import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import ServiceItem from "../ServiceItem/ServiceItem";

const ServiceOne = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://limitless-hollows-06705.herokuapp.com/services?categories=medium"
      )
      .then((res) => {
        setServices(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <Container fluid id="services" className="pt-5">
      <Container>
        {/* top header  */}
        <Row className="mb-4 mb-md-0">
          <Col
            data-aos="fade-right"
            data-aos-duration="800"
            sm="12"
            md="8"
            className="text-start"
          >
            <div className="serviceOne mt-1 mt-md-5 pt-1 pt-md-4">
              <h6 className="fw-bold">SPECIAL OFFERS</h6>
              <h2
                className="display-6 pb-3"
                style={{ borderBottom: "3px solid #ffc107" }}
              >
                <span className="fw-bold">POPULAR </span>
                DESTINATIONS
              </h2>
            </div>
          </Col>
          <Col
            md="4"
            className="d-none d-md-block"
            data-aos="fade-left  "
            data-aos-duration="800"
          >
            <img
              className="img-fluid"
              src="https://i.ibb.co/P5j1NG9/promo-1-2x.png"
              alt=""
            />
          </Col>
        </Row>
      </Container>
      {/* service cart  */}
      <Row sm="1" md="2" xl="4">
        {services.length > 0 ? (
          services.map((service) => (
            <ServiceItem key={service._id} service={service}></ServiceItem>
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

export default ServiceOne;
