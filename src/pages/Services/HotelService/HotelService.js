import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Hotels from "../Hotels/Hotels";

const HotelService = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://limitless-hollows-06705.herokuapp.com/services?categories=hotel"
      )
      .then((res) => {
        setHotels(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <Container>
      <Row className="mb-4 mb-md-0 ">
        <Col sm="12" md="8" className="text-start my-5">
          <div className="serviceOne mt-1 mt-md-5 pt-1 pt-md-4">
            <h6 className="fw-bold">SPECIAL OFFERS</h6>
            <h2
              className="display-6 pb-3"
              style={{ borderBottom: "3px solid #ffc107" }}
            >
              <span className="fw-bold">RECOMENDED </span>
              HOTELS
            </h2>
          </div>
        </Col>
      </Row>
      <Row xs="1" lg="1" xl="2" className="g-4">
        {hotels.length > 0 ? (
          hotels.map((hotelItem) => (
            <Hotels key={hotelItem._id} hotelItem={hotelItem}></Hotels>
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

export default HotelService;
