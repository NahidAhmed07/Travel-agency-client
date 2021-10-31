import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FcApproval } from "react-icons/fc";
import { RiDeleteBin6Line } from "react-icons/ri";
import { processDate } from "../../../utilities/utilities";

const CartView = ({ allOrder, handleApproved, handleDelete }) => {
  return (
    <Row>
      {allOrder.map((order) => {
        const { name, service, registerDate, status, _id, serviceId, userId } =
          order;
        // manage all ordedr cart view for mobile device
        return (
          <Col key={_id}>
            <Card
              style={{ width: "20rem", backgroundColor: "#d0d0d0" }}
              className="mb-3 text-start mx-auto"
            >
              <Card.Body>
                <Card.Title> User : {name}</Card.Title>
                <div>
                  <h6 className="my-3 fw-bold"> service : {service}</h6>
                  <h6>
                    <strong>Order Date :</strong> {processDate(registerDate)}
                  </h6>
                  <h6 className="my-4">
                    <strong>Status :</strong>
                    {status === "approved" ? (
                      <span className="approved ms-3">Approved</span>
                    ) : (
                      <span className="pending ms-3">Pending...</span>
                    )}
                  </h6>
                  <div>
                    <strong>Action :</strong>
                    <FcApproval
                      onClick={() => handleApproved(serviceId, userId)}
                      className="admin-approved-btn me-4 ms-3 fs-3"
                    />
                    <RiDeleteBin6Line
                      onClick={() => handleDelete(serviceId, userId)}
                      className="admin-delete-btn fs-3"
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default CartView;
