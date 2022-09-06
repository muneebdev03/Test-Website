import React from "react";

import "../styles/Description.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const renderDescription = () => {
  return (
    <Container>
      <Row className="desc-row">
        <p className="">
          We mix Southeast Asian Flavors with Western flair and Japenese cooking
          techniques to create our unique, Balinese-inspired menu.
        </p>
      </Row>
    </Container>
  );
};
const Description = () => {
  return <section className="desc-wrapper">{renderDescription()}</section>;
};

export default Description;
