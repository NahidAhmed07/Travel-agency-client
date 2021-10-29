import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Login.css";
import googleIcon from "../../../images/google.png";
import githubIcon from "../../../images/github.png";
import useAuth from "../../../hooks/useAuth";
import { useHistory, useLocation } from "react-router";
import swal from "sweetalert";

const Login = () => {
  const { googleLogin, setUser, githubLogin } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location?.state?.from || "/";

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);
        swal({
          title: `Hi ! ${result.user.displayName}`,
          text: "Yor Successfully Login",
          icon: "success",
        });
        history.push(redirect_uri);
      })
      .catch((err) => {
        swal({
          title: `Login Failed !`,
          text: "Something went Wrong",
          icon: "error",
        });
        console.log(err.message);
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        setUser(result.user);
        swal({
          title: `Hi ! ${result.user.displayName}`,
          text: "Yor Successfully Login",
          icon: "success",
        });
        history.push(redirect_uri);
      })
      .catch((err) => {
        swal({
          title: `Login Failed !`,
          text: "Something went Wrong",
          icon: "error",
        });
        console.log(err.message);
      });
  };

  return (
    <Container className="my-5" style={{ minHeight: "100vh" }}>
      <Row>
        <Col sm={12} md={8} lg={5} xl={4} className="mx-auto my-5">
          <div className="login-form shadow-lg my-5">
            <h5 className="mb-4">Login With</h5>
            <button className="google-login" onClick={handleGoogleLogin}>
              <img width="25px" src={googleIcon} alt="" />
              <span>Continue with Google</span>
            </button>
            <button className="google-login" onClick={handleGithubLogin}>
              <img width="25px" src={githubIcon} alt="" />
              <span>Continue with Github</span>
            </button>
            <p>Don’t have an account, Please Login</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
