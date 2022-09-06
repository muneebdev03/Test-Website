import React from "react";

import Logo from "../assests/Logo.png";
import FreeVec from "../assests/freeVec.png";
import TimeVec from "../assests/timeVec.png";

import "../styles/Header.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = () => {
  const renderNavbar = () => {
    return (
      <Navbar expand="md">
        <Container>
          <Navbar.Brand href="#home">
            <img className="logo" src={Logo} alt="logo"></img>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav nav-links "
            style={{ backgroundColor: "white" }}
          />
          <Navbar.Collapse id="basic-navbar-nav nav-links">
            <Nav className="me-auto link nav-links">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#menu">Menu</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };

  const renderHeadingPara = () => {
    return (
      <Container>
        <Row>
          <Col>
            <h2 className="BannerHeading">TiQuest Bistro</h2>
          </Col>
        </Row>
        <Row className=" main-heading">
          <p className="BannerPara">2 Rue de Prague</p>
        </Row>
      </Container>
    );
  };

  const renderButtons = () => {
    return (
      <Container className="Buttons-home">
        <Row className=" main-para">
          <Col xs={2}>
            <button className="free-btn">
              <img src={FreeVec} /> Free
            </button>
          </Col>
          <Col xs={2}>
            <button className="time-btn">
              <img src={TimeVec} /> 10:00-17:00
            </button>
          </Col>
        </Row>
      </Container>
    );
  };

  return (
    <header className="Header-Wrapper">
      {renderNavbar()}
      {renderHeadingPara()}
      {renderButtons()}
    </header>
  );
};

export default Header;
