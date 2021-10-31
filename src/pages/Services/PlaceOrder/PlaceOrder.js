import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import swal from "sweetalert";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const [service, setService] = useState({});
  const { id } = useParams();
  const { name, location, country, price, img, title } = service;
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();
  const history = useHistory();
  const [isUpdated, setIsUpdated] = useState(false);

  setValue("name", user.displayName);
  setValue("email", user.email || user.displayName);
  setValue("service", service.name);

  useEffect(() => {
    axios
      .get(`https://limitless-hollows-06705.herokuapp.com/services/${id}`)
      .then((res) => {
        setService(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const onSubmit = (data) => {
    setIsUpdated(true);
    const date = new Date();
    const currentDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
    data.registerDate = currentDate;
    data.serviceId = service.serviceId;
    data.userId = user.uid;
    data.status = "Pending...";

    axios
      .post("https://limitless-hollows-06705.herokuapp.com/place_order", data)
      .then((res) => {
        // user notification
        if (res.data?.serviceAdded) {
          swal({
            title: "Registration Failed !",
            text: "This service already Added your Order list",
            icon: "error",
            buttons: "back to Home",
          });
        }
        if (res.data.insertedId) {
          swal(
            "Place Order Successful",
            "Your Entered Information has been Successfully save on our Database",
            "success"
          );
          history.push("/home");
        }
        setIsUpdated(false);
      })
      .catch((err) => {
        console.log(err.message);
        setIsUpdated(false);
        swal("Registration Failed", err.message, "error");
      });
  };
  return (
    <Container className="my-5 pt-5">
      <Row className="g-5" xs="1" md="2">
        <Col>
          <div>
            <img className="img-fluid rounded-2" src={img} alt="" />
          </div>
          <div className="text-start place-order-text py-5">
            <h3>Name : {name}</h3>
            <h6>Location : {(country ? country : " ") + " " + location}</h6>
            <h4> Price : {price}</h4>
            <p className="fw-bold m">Description : {title}</p>
            <button className="hero-book-btn mt-2">Confirm Book</button>
          </div>
        </Col>

        <Col className="mx-auto text-start mt-5">
          <div className="reg-form">
            <h4
              style={{ fontSize: "26px" }}
              className="header-text text-start mb-3"
            >
              Register Service
            </h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="">
                Full Name <span className="text-danger">*</span>
              </label>
              <br />
              <input {...register("name")} /> <br />
              <label htmlFor="">
                Email Address <span className="text-danger">*</span>
              </label>{" "}
              <br />
              <input {...register("email", { required: true })} /> <br />
              <label htmlFor="">
                Mobile Number <span className="text-danger">*</span>
              </label>{" "}
              <br />
              <input
                type="number"
                {...register("mobile", { required: true })}
                placeholder="Mobile Number"
              />
              <br />
              <label htmlFor="">
                Address <span className="text-danger">*</span>
              </label>{" "}
              <br />
              <input
                type="text"
                {...register("address", { required: true })}
                placeholder="Your Address"
              />
              <br />
              <label htmlFor="">Service Name</label> <br />
              <input {...register("service")} /> <br />
              <label htmlFor="">
                Date <span className="text-danger">*</span>
              </label>{" "}
              <br />
              <input type="date" {...register("date", { required: true })} />
              <br />
              <button type="submit" className="rag-submit w-100">
                {/* when placeorder show spinner */}
                {isUpdated ? (
                  <Spinner
                    animation="border"
                    variant="light"
                    style={{ height: "25px", width: "25px" }}
                  />
                ) : (
                  "Place Order"
                )}
              </button>
              {errors.exampleRequired && <span>This field is required</span>}
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PlaceOrder;
