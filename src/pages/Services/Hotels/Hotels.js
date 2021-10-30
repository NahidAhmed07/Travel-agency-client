import React, { useRef } from "react";
import "./Hotels.css";
import { AiFillStar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

import { Col } from "react-bootstrap";
import { useHistory } from "react-router";

const Hotels = ({ hotelItem }) => {
  const textRef = useRef();
  const history = useHistory();
  const { img, hotel, price, title, location, rating, _id } = hotelItem;

  const handleTextIn = () => {
    textRef.current.style.left = "-70%";
  };
  const handleTextOUt = () => {
    textRef.current.style.left = "0px";
  };

  const handleBook = (id) => {
    history.push(`/place_order/${id}`);
  };

  return (
    <Col data-aos="fade-left" data-aos-duration="800">
      <div className="d-flex hotel-item">
        <div className="hotel-text-div" ref={textRef}>
          <div className="text-start hotel-text">
            <h6 className="hotel-text-title">{hotel}</h6>
            <h6>
              {[...Array(rating).keys()].map((index) => (
                <AiFillStar key={index} className="star-icon" />
              ))}
            </h6>
            <h5>
              <span className="fs-3">{price} </span> <small>per day</small>
            </h5>
            <p className="my-3 d-none d-md-block">{title} </p>
            <div>
              <button
                onClick={() => handleBook(_id)}
                className="hotel-book-btn"
              >
                Book Now
              </button>
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

          <p className="hotel-img-text">
            <MdLocationOn /> , {location}
          </p>
        </div>
      </div>
    </Col>
  );
};

export default Hotels;
