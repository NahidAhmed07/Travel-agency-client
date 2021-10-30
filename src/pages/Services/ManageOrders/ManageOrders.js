import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const ManageOrders = () => {
  const { setIsMenuOpen } = useAuth();
  const [allOrder, setAllOrder] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/all_order")
      .then((res) => {
        console.log(res.data);
        setAllOrder(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <Container
      className="my-5"
      style={{ minHeight: "100vh" }}
      onClick={() => setIsMenuOpen(false)}
    >
      <Row>
        <Col sm="12" md="8" className="text-start">
          <div className="serviceOne mt-1 mt-md-5 pt-1 pt-md-4">
            <h6 className="fw-bold">Travesia Travel</h6>
            <h2
              className="display-6 pb-3"
              style={{ borderBottom: "3px solid #ffc107" }}
            >
              <span className="fw-bold">MANAGE </span>
              ALL ORDERS
            </h2>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ManageOrders;
