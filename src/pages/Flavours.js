import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Menu from "../components/Menu";
import "../styles/Flavours.css"; 
import image1 from "../images/Rectangle 21.png"; 
import image2 from "../assets/gelatoFlavours.svg"; 
import image3 from "../assets/sorbetFlavours.svg"; 
import image4 from "../images/Rectangle 22 (1).png"; 
import woodFrame1 from "../images/frameWood.png";
import woodFramePhone from "../images/frameWoodPhone.png";
import "../styles/Flavours.css";
import FrameWoodWhite from "../components/FrameWoodWhite";
import GelatoCorn from "../components/gelatoCorn";

function Flavours() {
  return (
    <div className="flavours">
      <Container fluid>
        <Menu /> {/* Usar el componente Menu */}
        <FrameWoodWhite></FrameWoodWhite>
        <GelatoCorn></GelatoCorn>
        <Row className="justify-content-center p-4">
          <Col
            xs={12}
            md={6}
            lg={6}
            className="text-center d-flex justify-content-center align-items-center order-md-2"
          >
            <Image src={image2} fluid className="gallery-image" />
          </Col>{" "}
          <Col
            xs={12}
            md={6}
            lg={6}
            className="text-center d-flex justify-content-center align-items-center order-md-1"
          >
            <Image
              src={image1}
              fluid
              className="text-center d-flex justify-content-center align-items-center p-3"
            />
          </Col>
        </Row>
        <Row className="justify-content-center p-4">
          <Col
            xs={12}
            md={6}
            lg={6}
            className="text-center d-flex justify-content-center align-items-center"
          >
            <Image src={image3} fluid className="gallery-image" />
          </Col>
          <Col
            xs={12}
            md={6}
            lg={6}
            className="text-center d-flex justify-content-center align-items-center p-4"
          >
            <Image src={image4} fluid className="gallery-image" />
          </Col>
        </Row>
        <Row className="w-100 text-center">
          <Col>
            <Button
              href="/faqs"
              variant="outline-secondary "
              className="rounded-pill mt-4 px-4 fw-bold custom-button"
              
            >
              {" "}
              Questions?
            </Button>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <Image
              src={woodFrame1}
              alt="Wood Container"
              className="frame-wood-image"
            />
            <Image
              src={woodFramePhone}
              alt="Blue Container Phone"
              className="frame-wood-image-phone"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Flavours;
