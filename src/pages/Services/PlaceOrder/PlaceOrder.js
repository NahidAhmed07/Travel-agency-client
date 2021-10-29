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
  const { name, location, country, price, _id, img, title } = service;
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const { eventId } = useParams();
  const { user } = useAuth();
  const history = useHistory();
  const [isUpdated, setIsUpdated] = useState(false);

  setValue("name", user.displayName);
  setValue("username", user.email || user.displayName);
  setValue("event", service.name);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/place_order/${id}`)
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

    axios
      .post("https://fast-ravine-50741.herokuapp.com/event/register", data)
      .then((res) => {
        if (res.data?.eventAdded) {
          swal({
            title: "Registration Failed !",
            text: "This event already Added your event list",
            icon: "error",
            buttons: "back to Home",
          });
        }
        if (res.data.insertedId) {
          swal(
            "Registration Successful",
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
      <Row className="g-5">
        <Col>
          <div>
            <img className="img-fluid rounded-2" src={img} alt="" />
          </div>
        </Col>
        <Col>
          <div className="text-start place-order-text py-5">
            <h3>Name : {name}</h3>
            <h6>Location : {(country ? country : " ") + " " + location}</h6>
            <h4> Price : {price}</h4>
            <p className="fw-bold m">Description : {title}</p>
            <button className="hero-book-btn mt-5">Confirm Book</button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="12" md="8" lg="6" xl="5" className="mx-auto text-start mt-5">
          <div className="reg-form">
            <h4
              style={{ fontSize: "26px" }}
              className="header-text text-start mb-3"
            >
              Register Service
            </h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="">Full Name </label> <br />
              <input {...register("name")} /> <br />
              <label htmlFor="">Username Or Email</label> <br />
              <input {...register("username", { required: true })} /> <br />
              <label htmlFor="">Date</label> <br />
              <input
                type="date"
                {...register("eventDate", { required: true })}
                placeholder="Date"
              />{" "}
              <br />
              <label htmlFor="">Description</label> <br />
              <input
                {...register("Description", { required: true })}
                placeholder="Description"
              />{" "}
              <br />
              <label htmlFor="">Event Name</label> <br />
              <input {...register("event")} /> <br />
              <button type="submit" className="rag-submit w-100">
                {isUpdated ? (
                  <Spinner
                    animation="border"
                    variant="light"
                    style={{ height: "25px", width: "25px" }}
                  />
                ) : (
                  "Registration"
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
