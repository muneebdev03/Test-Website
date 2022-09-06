import React from "react";
import { Fakedata } from "../Data/Fakedata";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import "../styles/Menu.css";
const Menu = () => {
  return (
    <section className=" menu-wrapper">
      <div className="container ">
        <div className="row">
          <div className="menu-buttons">
            <button  className="buttonAll">All</button>
            <button className="buttonFood">Food</button>
            <button className="buttonDrink">Drinks</button>
          </div>
        </div>
        <div className="row">
          <div className="menu-names">
            <p className="Appetizer">Appetizers</p>
            <p className="sameMenu">Main dishes</p>
            <p className="sameMenu">Alcoholic Drinks</p>
            <p className="sameMenu">Soft Drinks</p>
          </div>
        </div>
        <div className="row">
          <h3>Appetizers</h3>
        </div>
        <div className="row">
          <p className="menu-desc">
            All of our products come from local harvests
          </p>
        </div>
      </div>
      {Fakedata.map((items) => {
        return (
          <Container>
            <Row>
              <Col xs={3}>
                <img src={items.image}></img>
              </Col>
              <Col xs={6}>
                <p className="product-head">{items.heading}</p>
                <p className="product-desc">{items.description}</p>
              </Col>
              <Col xs={3}>
                <p className="product-price">{items.price}</p>
                <button className="add-button">+</button>
              </Col>
            </Row>
          </Container>
        );
      })}

      <div className="row m-auto">
        <div className="col mr-auto offset-3">
          <button className="basket-btn">Basket </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
