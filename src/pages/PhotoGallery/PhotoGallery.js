import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { gallery } from "../../utilities/utilities";
import "./PhotoGallery.css";

const PhotoGallery = () => {
  const text = ["South America", "Asia", "Australia", "Africa"];
  return (
    <Container>
      {/* top heder  */}
      <Row className="mb-4 mb-md-0 g-4">
        <Col sm="12" md="8" className="text-start my-5">
          <div className="serviceOne mt-1 mt-md-5 pt-1 pt-md-4">
            <h6 className="fw-bold">HAPPY MEMORIES</h6>
            <h2
              className="display-6 pb-3"
              style={{ borderBottom: "3px solid #ffc107" }}
            >
              <span className="fw-bold">PHOTO </span>
              GALLERY
            </h2>
          </div>
        </Col>
      </Row>
      {/* Photo gellery card  */}
      <Row className="mb-5 g-4">
        <Col md="12" lg="6" data-aos="fade-right" data-aos-duration="800">
          <div className="_gallery-div position-relative">
            <img
              className="_gallery-img img-fluid rounded-2"
              src="https://i.ibb.co/SvBSwk0/gallery1.jpg"
              alt=""
            />

            <div className="_gallery-overlay"></div>
            <h5 className="fw-bold _gallery-text ">North America</h5>
          </div>
        </Col>
        {gallery.map((img, index) => (
          <Col md="12" lg="3" data-aos="zoom-in-up" data-aos-duration="800">
            <div className="_gallery-div position-relative">
              <img
                className="_gallery-img img-fluid rounded-2"
                src={img}
                alt=""
              />
              <div className="_gallery-overlay"></div>
              <h5 className="fw-bold _gallery-text ">{text[index]}</h5>
            </div>
          </Col>
        ))}
        <Col md="12" lg="6" data-aos="fade-left" data-aos-duration="800">
          <div className="_gallery-div position-relative">
            <img
              className="_gallery-img img-fluid rounded-2"
              src="https://i.ibb.co/vL7FBs7/gallery6.jpg"
              alt=""
            />
            <div className="_gallery-overlay"></div>
            <h5 className="fw-bold _gallery-text ">North America</h5>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PhotoGallery;
