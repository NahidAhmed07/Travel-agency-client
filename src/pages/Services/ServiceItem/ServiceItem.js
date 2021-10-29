import React from "react";
import { Col } from "react-bootstrap";
import { useHistory } from "react-router";
import "./ServiceItem.css";

const ServiceItem = ({ service }) => {
  const { img, price, temperature, country, location, _id } = service;
  const history = useHistory();

  const handleBook = (id) => {
    history.push(`/place_order/${id}`);
  };
  return (
    <Col className="m-0 p-0">
      <div
        className="service-item position-relative p-3"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="service-top-text d-flex justify-content-between">
          <div className="text-start transform-text">
            <h6>START PER NIGHT</h6>
            <h4>{price}</h4>
          </div>
          <div className="text-end transform-text-low">
            <h6>LOCAL TEMPERATURE</h6>
            <h4>{temperature}</h4>
          </div>
        </div>
        <p className="my-5 transform-text">{service?.title.slice(0, 70)}</p>
        <div className="d-flex justify-content-between align-items-center pt-1">
          <div className="text-start transform-text-low">
            <h6>{country}</h6>
            <h4 className="fw-bold">{location}</h4>
          </div>
          <div className="text-end">
            <button
              onClick={() => handleBook(_id)}
              className="transform-text book-now-btn"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ServiceItem;
