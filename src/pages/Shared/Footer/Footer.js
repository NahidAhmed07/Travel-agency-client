import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import axios from "axios";
import { footerImages } from "../../../utilities/utilities";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://limitless-hollows-06705.herokuapp.com/post")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);
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
                <HashLink to="/home#home">&#62; Home</HashLink>
              </li>
              <li>
                <HashLink to="/home#services"> &#62; Services </HashLink>
              </li>

              <li>
                <HashLink to="/home#service_2">&#62; Special Offer</HashLink>
              </li>

              <li>
                <HashLink to="/home#hotel">&#62; Hotels</HashLink>
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
            <h5>Contact Information</h5>
            <hr />
            <br />
            <div>
              <strong>Email :</strong> <br />
              <p className="email"> developernahid@gmail.com</p>
              <p className="email">mdnahidahmed2002@gmail.com</p>
              <strong>Phone : </strong> <br />
              <p className="phone">01758597460</p>
              <p className="phone">01627816080</p>
            </div>
          </Col>
          <Col>
            <h5>Photo Gallery</h5>
            <hr />
            <br />
            {/* footer mini photo gallery  */}
            <Row xs={2} md={3} className="g-3">
              {footerImages.map((img) => (
                <Col key={img.slice(0, 20)} className="overflow-hidden">
                  <img
                    src={img}
                    className="img-fluid gallery-img"
                    alt="footer img"
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <br />
        <br />
        <p className="text-center">
          Copyright © 2021 Nahid Ahmed. Rights Reserved.
        </p>
      </Container>
    </Container>
  );
};

export default Footer;
