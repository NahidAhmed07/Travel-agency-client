import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner, Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import { processDate } from "../../../utilities/utilities";

const ManageOrders = () => {
  const { setIsMenuOpen, user } = useAuth();
  const [allOrder, setAllOrder] = useState([]);

  useEffect(() => {
    axios
      .get("https://limitless-hollows-06705.herokuapp.com/all_order")
      .then((res) => {
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
      <Row className="my-5">
        {allOrder.length > 0 ? (
          <Table striped hover>
            <thead>
              <tr>
                <th>User Name</th>
                <th>service Name</th>
                <th>Order Date</th>
                <th>status</th>
                <th>Action</th>
              </tr>
            </thead>
            {allOrder.map((order) => {
              const { name, service, registerDate, status, _id } = order;
              return (
                <tbody key={_id}>
                  <tr>
                    <td>{name}</td>
                    <td>{service}</td>
                    <td>{processDate(registerDate)}</td>
                    <td>{status}</td>
                    <td>
                      <button>approved</button>
                      <button>delete</button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        ) : (
          <Col sm="2" lg="1" className="mx-auto">
            <Spinner animation="border" variant="secondary" />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default ManageOrders;
