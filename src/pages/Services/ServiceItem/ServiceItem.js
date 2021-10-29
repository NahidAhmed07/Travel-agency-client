import React from "react";
import { Col } from "react-bootstrap";
import "./ServiceItem.css";

const ServiceItem = ({ service }) => {
  return (
    <Col className="m-0 p-0">
      <div
        className="service-item position-relative p-3"
        style={{ backgroundImage: `url(${service.img})` }}
      >
        <div className="service-top-text d-flex justify-content-between">
          <div className="text-start transform-text">
            <h6>START PER NIGHT</h6>
            <h4>{service.price}</h4>
          </div>
          <div className="text-end transform-text-low">
            <h6>LOCAL TEMPERATURE</h6>
            <h4>{service.temperature}</h4>
          </div>
        </div>
        <p className="my-5 transform-text">{service?.title.slice(0, 70)}</p>
        <div className="d-flex justify-content-between align-items-center pt-1">
          <div className="text-start transform-text-low">
            <h6>{service.country}</h6>
            <h4 className="fw-bold">{service.location}</h4>
          </div>
          <div className="text-end">
            <button className="transform-text book-now-btn">Book Now</button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ServiceItem;
