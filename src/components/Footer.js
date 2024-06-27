import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaTripadvisor,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Footer.css"; // Asegúrate de crear este archivo para estilos personalizados
import imageWood from "../assets/Subtract.svg";
import frameWood from "../assets/Frame 208.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid className="footer-container">
        <Row className="text-center">
          <Col
            xs={12}
            md={4}
            className="footer-column text-center d-flex flex-column align-items-center"
          >
            <div className="line-container left">
              <div className="vertical-line"></div>
              <img src={imageWood} alt="Vertical line" className="image-wood" />
              <div className="vertical-line"></div>
            </div>
            <h5>visit US!</h5>
            <a
              href="https://maps.app.goo.gl/RaDicbq6VTfGNwDr5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMapMarkerAlt className="footer-icon mb-3" />

              <p>
                5 Aplin Street, Cairns City
                <br /> QLD 4870, Australia
              </p>
            </a>{" "}
            <p className="company-desk" style={{ fontSize: "12px" }}>
              @ Just Devine Gelato | Site by{" "}
              <a
                href="https://www.instagram.com/fancyitsolutions"
                target="_blank"
                rel="noopener noreferrer"
              >
                FancyIT
              </a>
            </p>
            <div className="line-container right">
              <div className="vertical-line"></div>
              <div className="vertical-line"></div>
              <img src={imageWood} alt="Vertical line" className="image-wood" />
            </div>
          </Col>
          <Col xs={12} className="d-block d-md-none">
            <div className="frame-wood">
              <img
                src={frameWood}
                alt="Wood line"
                className="image-frameWood"
              />
            </div>
          </Col>
          <Col
            xs={12}
            md={4}
            className="footer-column  d-flex flex-column align-items-center"
          >
            <div className="line-container left">
              <img src={imageWood} alt="Vertical line" className="image-wood" />
              <div className="vertical-line"></div>{" "}
              <div className="vertical-line"></div>
            </div>
            <h5>HOURS</h5>
            <FaClock className="footer-icon mb-3" />
            <p>Mon - Fri: 11am - 10pm</p>
            <p>Sat - Sun: 10am - 10pm</p>
            <div className="line-container right">
              <div className="vertical-line"></div>
              <div className="vertical-line"></div>
              <img src={imageWood} alt="Vertical line" className="image-wood" />
            </div>
          </Col>
          <Col xs={12} className="d-block d-md-none">
            <div className="frame-wood">
              <img
                src={frameWood}
                alt="Wood line"
                className="image-frameWood"
              />
            </div>
          </Col>
          <Col
            xs={12}
            md={4}
            className="footer-column text-center d-flex flex-column align-items-center"
          >
            <div className="line-container left">
              <img src={imageWood} alt="Vertical line" className="image-wood" />
              <div className="vertical-line"></div>{" "}
              <div className="vertical-line"></div>
            </div>
            <h5>CONTACT</h5>
            <div className="social-icons mb-3">
              <a
                className="p-3"
                href="https://www.tripadvisor.com/Restaurant_Review-g255069-d1783038-Reviews-Devine_Gelato-Cairns_Cairns_Region_Queensland.html?m=19905"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTripadvisor className="footer-icon" />
              </a>{" "}
              <a
                className="p-3"
                href="https://www.instagram.com/justdevinegelato/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="footer-icon" />
              </a>
              <a
                className="p-3"
                href="https://www.facebook.com/devinegelato/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="footer-icon" />
              </a>
            </div>
            <p>
              <a href="mailto:devinegelato@gmail.com">devinegelato@gmail.com</a>
            </p>
            <p>
              <a href="tel:+0740414959">0740414959</a>
            </p>
            <p className="company-phone" style={{ fontSize: "12px" }}>
              @ Just Devine Gelato | Site by FancyIT
            </p>
            <div className="line-container right">
              <div className="vertical-line"></div>
              <img src={imageWood} alt="Vertical line" className="image-wood" />
              <div className="vertical-line"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
