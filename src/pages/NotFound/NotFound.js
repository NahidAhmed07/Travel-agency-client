import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="my-5" style={{ minHeight: "100vh" }}>
      <Row>
        <Col sm="12" md="8" className="text-start">
          <div className="serviceOne mt-1 mt-md-5 pt-1 pt-md-4">
            <h6 className="fw-bold">Travesia Travel</h6>
            <h2
              className="display-6 pb-3"
              style={{ borderBottom: "3px solid #ffc107" }}
            >
              <span className="fw-bold"> PAGE </span>
              NOT FOUND
            </h2>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
