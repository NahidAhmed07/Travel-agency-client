import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import "./Testimonial.css";

const Testimonial = () => {
  const [persons, setPerson] = useState([]);
  useEffect(() => {
    axios
      .get("https://limitless-hollows-06705.herokuapp.com/post")
      .then((res) => {
        setPerson(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <Container fluid className="testimonial-main">
      <Container>
        <Row className="mb-4 mb-md-0 ">
          <Col sm="12" md="8" className="text-start my-5">
            <div className="serviceOne testimonial mt-1 mt-md-5 pt-1 pt-md-4">
              <h6 className="fw-bold">HAPPY MEMORIES</h6>
              <h2
                className="display-6 pb-3"
                style={{ borderBottom: "3px solid #ffc107" }}
              >
                <span className="fw-bold">OUR </span>
                TESTIMONIALS
              </h2>
            </div>
          </Col>
        </Row>

        <Row xs="1" md="2" lg="3" className="pb-5">
          {persons.length > 0 ? (
            persons.map((person) => (
              <Col>
                <div className="test-card position-relative pb-5 rounded-2">
                  <div className="test-img">
                    <img className="img-fluid" src={person.imgtwo} alt="" />
                  </div>
                  <div className="test-circle-img">
                    <img className="img-fluid" src={person.img} alt="" />
                  </div>
                  <div className="test-text p-4">
                    <h5 className="fw-bold">{person.title}</h5>
                    <h6>
                      {[...Array(5).keys()].map((index) => (
                        <AiFillStar key={index} className="star-icon mx-1" />
                      ))}
                    </h6>
                    <p className="my-4 text-muted">{person.des}</p>
                    <strong
                      className="pb-1"
                      style={{ borderBottom: "2px solid #ffc107" }}
                    >
                      read more
                    </strong>
                  </div>
                </div>
              </Col>
            ))
          ) : (
            <Col sm="2" lg="1" className="mx-auto">
              <Spinner animation="border" variant="secondary" />
            </Col>
          )}
        </Row>
      </Container>
    </Container>
  );
};

export default Testimonial;
