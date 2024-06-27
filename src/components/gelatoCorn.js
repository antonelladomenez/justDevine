import { Col, Image, Row } from "react-bootstrap";
import redirectImage from "../images/corn1.png"; // Asegúrate de que la imagen esté en la ruta correcta
import React from "react";

const GelatoCorn = () => {
  const handleRedirect = () => {
    window.location.href = "/contact";
  };
  return (
    <Row className="justify-content-center justify-content-md-end ">
    <Col xs="auto" className="d-flex justify-content-center justify-content-md-end">
      <div className="redirect-image-container" onClick={handleRedirect}>
        <Image
          src={redirectImage}
          alt="Redirect"
          className="redirect-image"
        />
        <div className="find-us-text">Find us!</div>
      </div>
    </Col>
  </Row>
  );
};

export default GelatoCorn;
