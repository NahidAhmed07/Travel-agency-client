import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Menubar.css";
import logo from "../../../images/logo.webp";
import useAuth from "../../../hooks/useAuth";
import { AiFillCloseCircle } from "react-icons/ai";
import { FiLogOut, FiLogIn } from "react-icons/fi";
import { MdAdminPanelSettings } from "react-icons/md";
import { BsCalendar2Event } from "react-icons/bs";
import avater from "../../../images/avater2.png";
import "./Menubar.css";

const Menubar = () => {
  const { user, logOut } = useAuth();
  const { isMenuOpen, setIsMenuOpen } = useAuth();
  return (
    <div className="position-relative">
      <Navbar style={{ backgroundColor: "#262626" }} expand="lg" fixed="top">
        <Container fluid className="px-0 px-md-2 px-lg-3">
          <Navbar.Brand className="d-none d-md-block" as={NavLink} to="/home">
            <img src={logo} alt="" height="40px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link
                as={NavLink}
                to="/home"
                className="nav-item"
                activeClassName="active-item"
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/my_orders"
                className="nav-item"
                activeClassName="active-item"
              >
                My Orders
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/manage_orders"
                className="nav-item"
                activeClassName="active-item"
              >
                Manage All Orders
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/add_service"
                className="nav-item"
                activeClassName="active-item"
              >
                Add A New Service
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {!user.displayName ? (
            <Nav>
              <Nav.Link
                as={NavLink}
                to="/login"
                className="user-nav-item"
                activeClassName="active-item"
              >
                <button className="nav-btn nav-reg">
                  <FiLogIn className="me-2"></FiLogIn> Login
                </button>
              </Nav.Link>
            </Nav>
          ) : (
            <Navbar.Brand>
              <img
                src={user.photoURL || avater}
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
            src={user.photoURL || avater}
            className="img-fluid rounded-circle mx-auto  "
            style={{ width: "100px", height: "100px" }}
            alt=""
          />
        </div>
        <h5 className="mt-2 text-center">
          {user.displayName || "Anonymous User"}
        </h5>
        <hr />

        <Nav.Link
          as={NavLink}
          to="/my_orders"
          className="user-nav-item"
          activeClassName="active-item"
        >
          <BsCalendar2Event className="me-2" />
          My Orders
        </Nav.Link>
        <Nav.Link
          as={NavLink}
          to="/manage_orders"
          className="user-nav-item"
          activeClassName="active-item"
        >
          <MdAdminPanelSettings className="me-2" />
          Manage All Orders
        </Nav.Link>
        {user.displayName ? (
          <Nav.Link className="user-nav-item" onClick={logOut}>
            {" "}
            <FiLogOut className="me-2"></FiLogOut>Log out
          </Nav.Link>
        ) : (
          <Nav.Link
            as={NavLink}
            to="/login"
            className="user-nav-item"
            activeClassName="active-item"
          >
            <FiLogIn className="me-2"></FiLogIn> Login
          </Nav.Link>
        )}
      </div>
    </div>
  );
};

export default Menubar;
