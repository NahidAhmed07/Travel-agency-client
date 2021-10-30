import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Menubar.css";
import logo from "../../../images/logo.webp";
import useAuth from "../../../hooks/useAuth";
import { AiFillCloseCircle } from "react-icons/ai";
import { FiLogOut, FiLogIn } from "react-icons/fi";
import {
  MdOutlineManageAccounts,
  MdOutlineAddchart,
  MdOutlineAddShoppingCart,
} from "react-icons/md";
import avatar from "../../../images/avater2.png";
import "./Menubar.css";
import { NavHashLink } from "react-router-hash-link";

const Menubar = () => {
  const { user, logOut } = useAuth();
  const { isMenuOpen, setIsMenuOpen } = useAuth();
  return (
    <div className="position-relative">
      <Navbar style={{ backgroundColor: "#262626" }} expand="lg" fixed="top">
        <Container>
          <Navbar.Brand className="d-none d-md-block" as={NavLink} to="/home">
            <img src={logo} alt="" height="40px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavHashLink
                to="/home#home"
                className="nav-item"
                activeClassName="active-item"
              >
                Home
              </NavHashLink>

              <NavHashLink
                className="nav-item"
                activeClassName="active-item"
                to="/home#services"
              >
                Services
              </NavHashLink>

              <NavHashLink
                to="/home#offer"
                className="nav-item"
                activeClassName="active-item"
              >
                Special Offers
              </NavHashLink>

              <NavHashLink
                to="/home#hotel"
                className="nav-item"
                activeClassName="active-item"
              >
                Hotels
              </NavHashLink>

              <NavHashLink
                to="/home#specialties"
                className="nav-item"
                activeClassName="active-item"
              >
                Specialties
              </NavHashLink>
            </Nav>
          </Navbar.Collapse>
          {!user.displayName ? (
            <Nav>
              <NavHashLink
                to="/login"
                className="user-nav-item"
                activeClassName="active-item"
              >
                <button className="nav-btn nav-reg">
                  <FiLogIn className="me-2"></FiLogIn> Login
                </button>
              </NavHashLink>
            </Nav>
          ) : (
            <Navbar.Brand>
              <img
                src={user.photoURL || avatar}
                alt=""
                height="45px"
                width="45px"
                className="rounded-circle user-avater"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            </Navbar.Brand>
          )}
        </Container>
      </Navbar>

      <div
        className="user-menu text-start"
        style={{ display: isMenuOpen ? "block" : "none" }}
      >
        <AiFillCloseCircle
          className="clos-btn"
          onClick={() => setIsMenuOpen(false)}
        ></AiFillCloseCircle>
        <br />

        <div className="mx-auto  d-flex justify-content-center">
          <img
            src={user.photoURL || avatar}
            className="img-fluid rounded-circle mx-auto  "
            style={{ width: "100px", height: "100px" }}
            alt=""
          />
        </div>
        <h5 className="mt-2 text-center">
          {user.displayName || "Anonymous User"}
        </h5>
        <hr />

        <NavHashLink
          to="/my_orders"
          className="user-nav-item"
          activeClassName="active-item"
        >
          <MdOutlineAddShoppingCart className="me-2" />
          My Orders
        </NavHashLink>
        <br />
        <NavHashLink
          to="/manage_orders"
          className="user-nav-item"
          activeClassName="active-item"
        >
          <MdOutlineManageAccounts className="me-2" />
          Manage All Orders
        </NavHashLink>
        <br />
        <NavHashLink
          to="/add_service"
          className="user-nav-item"
          activeClassName="active-item"
        >
          <MdOutlineAddchart className="me-2" />
          Add A New Service
        </NavHashLink>
        {user.displayName ? (
          <Nav.Link className="user-nav-item" onClick={logOut}>
            {" "}
            <FiLogOut className="me-2"></FiLogOut>Log out
          </Nav.Link>
        ) : (
          <NavHashLink
            as={NavLink}
            to="/login"
            className="user-nav-item ms-0 ps-0"
            activeClassName="active-item"
          >
            <FiLogIn className="me-2"></FiLogIn> Login
          </NavHashLink>
        )}
      </div>
    </div>
  );
};

export default Menubar;
