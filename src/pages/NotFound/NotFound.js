import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";

const NotFound = () => {
  const history = useHistory();
  return (
    <div
      style={{
        backgroundImage:
          "url(https://freefrontend.com/assets/img/html-css-404-page-templates/HTML-404-Page-Animated.png?fbclid=IwAR0IS3lfgsOOHw_VnXx4645MezfeNMdEdfEAQpslEotAX_-RZZ4mdtGevuo)",
      }}
    >
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

        <p className="text-start mt-3">
          <button onClick={() => history.goBack()} className="hero-book-btn">
            Back to Home
          </button>
        </p>
      </Container>
    </div>
  );
};

export default NotFound;
