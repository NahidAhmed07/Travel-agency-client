import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner, Table } from "react-bootstrap";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FcApproval } from "react-icons/fc";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";
import { processDate } from "../../../utilities/utilities";

const ManageOrders = () => {
  const { setIsMenuOpen } = useAuth();
  const [allOrder, setAllOrder] = useState([]);

  useEffect(() => {
    axios
      .get("https://limitless-hollows-06705.herokuapp.com/all_order")
      .then((res) => {
        setAllOrder(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const handleDelete = (sid, uid) => {
    // sid == serviceId and uid == userId
    swal({
      title: "Are you sure?",
      text: "Cancel This service form you Order list",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(
            `https://limitless-hollows-06705.herokuapp.com/my_order/${sid}/${uid}`
          )
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              const remaining = allOrder.filter(
                (order) => !(order.serviceId === sid && order.userId === uid)
              );

              setAllOrder(remaining);
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            }
          })
          .catch((err) => console.log(err.message));
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  const handleApproved = (sid, uid) => {
    // sid == serviceId and uid == userId
    axios
      .put(
        `https://limitless-hollows-06705.herokuapp.com/my_order/${sid}/${uid}`
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          const findItem = allOrder.find(
            (order) => order.serviceId === sid && order.userId === uid
          );
          if (findItem) {
            findItem.status = "approved";
            const remaining = allOrder.filter(
              (order) => !(order.serviceId === sid && order.userId === uid)
            );

            setAllOrder([findItem, ...remaining]);
          }
        } else {
          swal({
            title: "This Service Already Approved !",
            icon: "warning",
          });
        }
      })
      .catch((err) => console.log(err.massage));
  };
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
          <Table striped hover className="table">
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
              const {
                name,
                service,
                registerDate,
                status,
                _id,
                serviceId,
                userId,
              } = order;
              return (
                <tbody key={_id}>
                  <tr style={{ borderWidth: "1px" }}>
                    <td>{name}</td>
                    <td>{service}</td>
                    <td>{processDate(registerDate)}</td>
                    <td>
                      {status === "approved" ? (
                        <span className="approved">Approved</span>
                      ) : (
                        <span className="pending">Pending...</span>
                      )}
                    </td>
                    <td>
                      <FcApproval
                        onClick={() => handleApproved(serviceId, userId)}
                        className="admin-approved-btn me-4 fs-3"
                      />
                      <RiDeleteBin6Line
                        onClick={() => handleDelete(serviceId, userId)}
                        className="admin-delete-btn fs-3"
                      />
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
