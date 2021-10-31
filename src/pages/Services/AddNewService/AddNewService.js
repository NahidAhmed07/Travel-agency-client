import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";
import { randomId, randomImage } from "../../../utilities/utilities";

const AddNewService = () => {
  const [isCreated, setIsCreated] = useState(false);
  const { setIsMenuOpen } = useAuth();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm(); // import from react hook form

  setValue("price", "$"); //set default value

  const onSubmit = (data) => {
    setIsCreated(true);
    data.categories = "low";
    data.serviceId = randomId();
    if (!data.img.includes("http")) {
      data.img = randomImage();
    }
    axios
      .post("https://limitless-hollows-06705.herokuapp.com/services", data)
      .then((res) => {
        if (res.data.insertedId) {
          // success message
          swal("Successful!", "New Service Successfully Added !", "success");
        }
        reset();
        setIsCreated(false);
      })
      .catch((err) => {
        console.log(err.message);
        // error message
        swal("Failed to Add", "Something went wrong, try again", "error");
        setIsCreated(false);
      });
  };

  return (
    <Container className="my-5" onClick={() => setIsMenuOpen(false)}>
      {/* top herder  */}
      <Row>
        <Col sm="12" md="8" className="text-start">
          <div className="serviceOne mt-1 mt-md-5 pt-1 pt-md-4">
            <h6 className="fw-bold">Travesia Travel</h6>
            <h2
              className="display-6 pb-3"
              style={{ borderBottom: "3px solid #ffc107" }}
            >
              <span className="fw-bold">Add A </span>
              NEW SERVICE
            </h2>
          </div>
        </Col>
      </Row>
      {/* service adding form  */}
      <Row className="my-5 text-start">
        <Col xm="12" md="7" lg="6" className="mx-auto">
          <div className="reg-form">
            <h4
              style={{ fontSize: "26px" }}
              className="header-text text-start mb-3"
            >
              Add a new Service
            </h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="">
                Service Name <span className="text-danger">*</span>
              </label>
              <br />
              <input {...register("name")} placeholder="Service Name" /> <br />
              <label htmlFor="">
                Location <span className="text-danger">*</span>
              </label>
              <br />
              <input
                {...register("location", { required: true })}
                placeholder="Location"
              />
              <br />
              <label htmlFor="">
                Price <span className="text-danger">*</span>
              </label>
              <br />
              <input
                type="text"
                {...register("price", { required: true })}
                placeholder="Service Price"
              />
              <br />
              <label htmlFor="">
                Description<span className="text-danger">*</span>
              </label>
              <br />
              <textarea
                type="text"
                rows="3"
                className="w-100 p-2"
                {...register("title", { required: true })}
                placeholder="Service Description"
              />
              <br />
              <label htmlFor="">Service Image Url</label> <br />
              <input {...register("img")} placeholder="service image Url" />
              <br />
              <br />
              <button type="submit" className="rag-submit w-100">
                {isCreated ? (
                  <Spinner
                    animation="border"
                    variant="light"
                    style={{ height: "25px", width: "25px" }}
                  />
                ) : (
                  "Add Service"
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

export default AddNewService;
