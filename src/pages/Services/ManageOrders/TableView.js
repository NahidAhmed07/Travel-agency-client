import React from "react";
import { Table } from "react-bootstrap";
import { FcApproval } from "react-icons/fc";
import { RiDeleteBin6Line } from "react-icons/ri";
import { processDate } from "../../../utilities/utilities";

const TableView = ({ allOrder, handleApproved, handleDelete }) => {
  return (
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
        const { name, service, registerDate, status, _id, serviceId, userId } =
          order;
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
  );
};

export default TableView;
