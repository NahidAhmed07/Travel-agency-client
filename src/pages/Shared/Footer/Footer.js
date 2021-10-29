import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { footerImages } from "../../../utilities/utilities";
// import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <Container fluid className="footer py-5 text-start">
      <Container>
        <Row xs={1} md={2} lg={3} className="g-5">
          <Col>
            <h5>Useful Link</h5>
            <hr />
            <br />
            <ul className="useful-links">
              <li>
                <NavLink to="/home#home">&#62; Home</NavLink>
              </li>
              <li>
                <NavLink to="/my_orders"> &#62; My Orders </NavLink>
              </li>

              <li>
                <NavLink to="/manage_orders">&#62; Manage All Orders</NavLink>
              </li>

              <li>
                <NavLink to="/add_new_order">&#62; Add A New Orders</NavLink>
              </li>

              <li>
                <NavLink to="/login">&#62; Login</NavLink>
              </li>
              <li>
                <NavLink to="/">&#62; admin</NavLink>
              </li>
            </ul>
          </Col>
          <Col>
            {/* post single items  */}
            <h5>Recent Post</h5>
            <hr />
            <br />
            <div>
              <div className="d-flex gap-4 align-items-center post-item">
                <img
                  className="circle-img"
                  src="https://www.devsnews.com/wp/medicheck/wp-content/uploads/2020/04/blog-list-1-150x150.jpg"
                  alt=""
                />
                <div>
                  <h6 className="fw-bold">How About Fall Cleaning?</h6>
                  <p>
                    {" "}
                    <FaRegCalendarAlt className="me-3" />
                    April 05, 2020
                  </p>
                </div>
              </div>
              {/* post single items  */}
              <div className="d-flex gap-4 align-items-center my-4 post-item">
                <img
                  className="circle-img"
                  src="https://www.devsnews.com/wp/medicheck/wp-content/uploads/2020/04/blog-list-5-150x150.jpg"
                  alt=""
                />
                <div>
                  <h6 className="fw-bold">Four Ways a Clean</h6>
                  <p>
                    {" "}
                    <FaRegCalendarAlt className="me-3" />
                    April 02, 2020
                  </p>
                </div>
              </div>
              {/* post single items  */}
              <div className="d-flex gap-4 align-items-center post-item ">
                <img
                  className="circle-img"
                  src="https://www.devsnews.com/wp/medicheck/wp-content/uploads/2020/04/blog-list-4-150x150.jpg"
                  alt=""
                />
                <div>
                  <h6 className="fw-bold">Time For Spring Cleaning ?</h6>
                  <p>
                    {" "}
                    <FaRegCalendarAlt className="me-3" />
                    April 22, 2021
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <h5>Photo Gallery</h5>
            <hr />
            <br />
            {/* footer mini photo gallery  */}
            <Row xs={2} md={3} className="g-3">
              {footerImages.map((img) => (
                <Col key={img.slice(0, 2)}>
                  <img src={img} className="img-fluid" alt="footer img" />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <br />
        <br />
        <hr />
        <p className="text-center">
          <NavLink to="home#home">
            <MdOutlineKeyboardArrowUp className="up-icon" />
          </NavLink>
        </p>

        <p className="text-center">
          Copyright © 2020 TeamRejected. Rights Reserved.
        </p>
      </Container>
    </Container>
  );
};

export default Footer;
