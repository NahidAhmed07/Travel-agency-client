import React, { useRef } from "react";
import "./Hotels.css";
import { AiFillStar } from "react-icons/ai";

import { Col } from "react-bootstrap";

const Hotels = ({ hotelItem }) => {
  const textRef = useRef();

  const handleTextIn = () => {
    textRef.current.style.left = "-70%";
  };
  const handleTextOUt = () => {
    textRef.current.style.left = "0px";
  };
  const { img, hotel, price, title, location, rating } = hotelItem;

  return (
    <Col>
      <div className="d-flex hotel-item">
        <div className="hotel-text-div" ref={textRef}>
          <div className="text-start hotel-text">
            <h6>{hotel}</h6>
            <h6>
              {[...Array(rating).keys()].map((index) => (
                <AiFillStar className="star-icon" />
              ))}
            </h6>
            <h5>{price} per month</h5>
            <p>{title} </p>
            <div>
              <button>Book Now</button>
            </div>
          </div>
        </div>
        <div className="hotel-img-div position-relative">
          <img
            onMouseOver={handleTextIn}
            onMouseOut={handleTextOUt}
            className="img-fluid hotel-img"
            src={img}
            alt=""
          />
          <p className="hotel-img-text">{location}</p>
        </div>
      </div>
    </Col>
  );
};

export default Hotels;
