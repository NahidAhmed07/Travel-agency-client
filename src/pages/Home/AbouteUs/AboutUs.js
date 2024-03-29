import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import "./AboutUs.css";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { HiUsers } from "react-icons/hi";
import { RiEmotionHappyLine } from "react-icons/ri";
import { MdTravelExplore } from "react-icons/md";

const AboutUs = () => {
  const [specialties, setSpecialties] = useState([]);
  // icons array
  const icons = [
    <MdTravelExplore className="icon" />,
    <VscWorkspaceTrusted className="icon" />,
    <HiUsers className="icon" />,
    <RiEmotionHappyLine className="icon" />,
  ];

  useEffect(() => {
    axios
      .get("https://limitless-hollows-06705.herokuapp.com/specialties")
      .then((res) => {
        setSpecialties(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <Container fluid className="my-5 pt-5 about-main" id="specialties">
      <Container className="pt-5">
        <h6 data-aos="fade-left" data-aos-duration="800">
          TRAVESIA SPECIALS
        </h6>
        <h2
          data-aos="fade-right"
          data-aos-duration="800"
          className="display-3 mt-3 pb-3"
          style={{ borderBottom: "3px solid #ffc107" }}
        >
          Why Travel with Tutive?
        </h2>

        <Row className="mt-5 g-3">
          {specialties.length > 0 ? (
            specialties.map((item, index) => (
              <Col key={item._id} data-aos="fade-up" data-aos-duration="800">
                <div
                  style={{ width: "18rem" }}
                  className="specialties-item position-relative mx-auto"
                >
                  <div className="position-relative sp-img-div">
                    <img className="img-fluid sp-img" src={item.img} alt="" />
                    <div className="img-overlay"></div>
                  </div>
                  <div className="icon-div">{icons[index]}</div>
                  <h5 className="mt-5">{item.title}</h5>
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

export default AboutUs;
