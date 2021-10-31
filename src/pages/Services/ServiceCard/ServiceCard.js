import React from "react";
import { Card, Col } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { useHistory } from "react-router";

const ServiceCard = ({ service }) => {
  const history = useHistory();
  const { img, name, location, price, rating, _id } = service;

  return (
    <Col data-aos="fade-left" data-aos-duration="800">
      <Card className="text-start mx-auto" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          style={{ height: "200px" }}
          className="img-fluid"
          src={img}
        />
        <Card.Body>
          <Card.Title className="fw-bold">{name}</Card.Title>
          <p>
            <small>{location}</small>
          </p>
          <h6>
            {/* raing show using array method */}
            {[...Array(parseInt(rating) || 4).keys()].map((index) => (
              <AiFillStar key={index} className="star-icon" />
            ))}{" "}
            <small> {parseInt(rating) || 4} reviews</small>
          </h6>
          <h5 className="mt-3 fw-bold"> {price || 100}</h5>
        </Card.Body>
        <Card.Footer>
          <button
            onClick={() => history.push(`/place_order/${_id}`)}
            className="_book-btn"
          >
            BOOK NOW
          </button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ServiceCard;
