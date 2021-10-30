import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import axios from "axios";
import { footerImages } from "../../../utilities/utilities";

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
              {posts?.map((post) => (
                <div
                  key={post.id}
                  className="d-flex gap-4 align-items-center my-4 post-item"
                >
                  <img className="circle-img " src={post.img} alt="" />
                  <div>
                    <h6 className="fw-bold">{post.title}</h6>
                    <p>
                      <FaRegCalendarAlt className="me-3" />
                      {post.date}
                    </p>
                  </div>
                </div>
              ))}
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
