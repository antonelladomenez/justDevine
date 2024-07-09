import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./styles/Home.css"; // Puedes crear un archivo CSS para estilos adicionales
import portada from "./images/Background (5).png";
import secondaryImage from "./images/Rectangle 18.png"; // Asegúrate de que la imagen esté en la ruta correcta
import blueContainer from "./images/Blueprint-About-6.png"; // Asegúrate de que la imagen esté en la ruta correcta
import blueContainerPhone from "./assets/blueWoodPhone.svg"; // Asegúrate de que la imagen esté en la ruta correcta
import iceCornImage from "./images/Rectangle 19.png";
import woodFrame from "./images/frameWood.png";
import woodFramePhone from "./images/frameWoodPhone.png";
import GelatoCorn from "./components/gelatoCorn";
import Menu from "./components/Menu";
import "animate.css";

const Home = () => {
  return (
    <div className="home">
      <Container fluid className="p-0">
        <Row
          className="banner"
          style={{ marginRight: "0px", marginLeft: "0px" }}
        >
          <Image
            src={portada}
            alt="Cover Image"
            className="cover-image"
            style={{ paddingLeft: "0px", paddingRight: "0px" }}
          />
          <div className="welcome-container">
            <div className="welcome-text animate__animated animate__slideInUp">
              Welcome!
            </div>
            <GelatoCorn />
          </div>
        </Row>

        {/* Agrega el menú aquí */}
        <Menu />
        <Row className="align-items-center py-4">
          <Col xs={12} md={6} className="text-center text-md-start p-5">
            <h1
              className="display-4"
              style={{ color: "#C48989", fontWeight: "bold" }}
            >
              AUTHENTIC ITALIAN GELATO & SORBET
            </h1>
            <h2
              className="display-4"
              style={{ color: "#C48989", fontWeight: "bold" }}
            >
              HANDCRAFTED
            </h2>
            <h2
              className="display-4"
              style={{ color: "#C48989", fontWeight: "bold" }}
            >
              MADE FRESH DAILY
            </h2>
            <Button
              variant="outline-secondary"
              className="rounded-pill mt-4 px-4 fw-bold custom-button"
              href="/about-us"
            >
              About Us
            </Button>
          </Col>
          <Col xs={12} md={6} className="image-column">
            <Image
              src={secondaryImage} // Asegúrate de poner la ruta correcta de la imagen
              alt="Ice Cream Menu"
              fluid
              className="hero-image"
            />
          </Col>
        </Row>

        {/* Imagen debajo del segundo Row */}
        <Row className="text-center">
          <Col>
            <Image
              src={blueContainer}
              alt="Blue Container"
              className="blue-container-image"
            />
            <Image
              src={blueContainerPhone}
              alt="Blue Container Phone"
              className="blue-container-image-phone"
            />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col
            xs={12}
            md={6}
            className="text-center text-md-start p-5 order-md-2
"
          >
            <h1
              className="display-4"
              style={{ color: "#C48989", fontWeight: "bold" }}
            >
              SMALL BATCH{" "}
            </h1>
            <h2
              className="display-4"
              style={{ color: "#C48989", fontWeight: "bold" }}
            >
              PREMIUM INGREDIENTS{" "}
            </h2>
            <h2
              className="display-4"
              style={{ color: "#C48989", fontWeight: "bold" }}
            >
              MADE THE TRADITIONAL WAY{" "}
            </h2>
            <Button
              href="/flavours"
              variant="outline-secondary "
              className="rounded-pill mt-4 px-4 fw-bold custom-button"
            >
              {" "}
              Flavours
            </Button>
          </Col>
          <Col xs={12} md={6} className="text-center p-4 order-md-1">
            <Image
              src={iceCornImage} // Asegúrate de poner la ruta correcta de la imagen
              alt="Ice Cream Menu"
              fluid
              className="hero-image"
            />
          </Col>{" "}
        </Row>
        <Row className="text-center">
          <Col>
            <Image
              src={woodFrame}
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
};

export default Home;
