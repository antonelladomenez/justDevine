import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Carousel,
  Card,
  Button,
} from "react-bootstrap";
import woodFrame1 from "../images/frameWood.png";
import woodFramePhone from "../images/frameWoodPhone.png";
import "../styles/AboutUs.css";
import Menu from "../components/Menu";
import image1 from "../images/Agos.png";
import image2 from "../images/deffff.png";
import image3 from "../images/girls4.png";
import smile from "../images/smile.png";
import processIce from "../images/gelatoProcess.png";
import blueContainer from "../assets/blueWood.svg";
import blueContainerPhone from "../assets/blueWoodPhoneOriginal.svg";
import lemonPhoto from "../images/lemonAbout.png";
import pinkFrame from "../assets/pinkWood.svg";
import pinkFramePhone from "../assets/pinkWoodPhone.svg";
import bananaFarm from "../images/farmBanana.png";
import cornAbout from "../images/cornAboutUs.png";
import FrameWoodWhite from "../components/FrameWoodWhite";
import GelatoCorn from "../components/gelatoCorn";

function AboutUs() {
  return (
    <div className="aboutUs">
      <Container fluid id="root">
        <Menu />
        <FrameWoodWhite />
        <GelatoCorn></GelatoCorn>
        {/* Carousel for small devices */}
        <div className="d-block d-md-none d-flex justify-content-center align-items-center p-5">
          <Carousel>
            <Carousel.Item>
              <Image src={image1} alt="Image 1" className="custom-image" />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={image2} alt="Image 2" className="custom-image" />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={image3} alt="Image 3" className="custom-image" />
            </Carousel.Item>
          </Carousel>
        </div>
        <Row className="d-block d-md-none justify-content-center my-1">
          <Col md={12} className="d-flex justify-content-center">
            <div className="animated-text-container">
              <Image src={smile} alt="Smile" className="smile-image" />
            </div>
          </Col>
        </Row>
        {/* Row for larger devices */}
        <Row className="custom-row justify-content-center my-5 d-none d-md-flex">
          <Col sm={4} className="d-flex flex-column align-items-center">
            <Image src={image1} alt="Image 1" className="custom-image" />
            <Image src={smile} alt="Smile" className="smile-image" />
          </Col>
          <Col sm={4} className="d-flex justify-content-center">
            <Image src={image2} alt="Image 2" className="custom-image" />
          </Col>
          <Col sm={4} className="d-flex justify-content-center">
            <Image src={image3} alt="Image 3" className="custom-image" />
          </Col>
        </Row>
        <Row className="justify-content-center my-5">
          <Col md={12} className="d-flex justify-content-center">
            <div className="animated-text-container">
              <div className="animated-text">
                We love gelato and we love what we do!
              </div>
            </div>
          </Col>
        </Row>
        <Row className="gelatoProcess " style={{ marginBottom: "0px" }}>
          <Col style={{ marginBottom: "0px" }}>
            <Image
              src={processIce}
              alt="Gelato Process"
              className="gelato-process"
            />
          </Col>
        </Row>

        {/* Imagen debajo del segundo Row */}
        <Row className="text-center my-4">
          <Col>
            <Image
              src={blueContainer}
              alt="Blue Container"
              className="blue-aboutUs-image"
            />
            <Image
              src={blueContainerPhone}
              alt="Blue Container Phone"
              className="blue-aboutUs-phone"
            />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center p-4">
          <Col xs={12} md={6} className="mb-4">
            <Card
              className="p-4"
              style={{
                backgroundColor: "#e7edf4",
                borderRadius: "100px",
                borderColor: "#e7edf4",
                color: "#a7a9ac",
              }}
            >
              <Card.Body>
                <Card.Title
                  className=" h4 "
                  style={{
                    letterSpacing: "0.2em",
                    fontWeight: "800",
                    color: "#a7a9ac",
                  }}
                >
                  TRADITIONAL METHODS
                </Card.Title>
                <Card.Text style={{ color: "#a7a9ac", fontWeight: "500" }}>
                  We make our gelato the authentic Italian way—fresh daily in
                  small batches. Right here at the shop.
                  <br />
                  <br />
                  It is time consuming and laborious, but good things take time.
                  Each day, we custom make our gelato base using fresh natural
                  ingredients.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center align-items-center mb-4"
          >
            <video
              className="custom-video"
              autoPlay
              loop
              muted
              controls={false}
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback"
            >
              <source
                src={`${process.env.PUBLIC_URL}/videos/gelatoProcessVideo.mp4`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center p-4">
          <Col xs={12} md={6} className="mb-4 order-md-2">
            <Card
              className="p-4"
              style={{
                backgroundColor: "#e7edf4",
                borderRadius: "100px",
                borderColor: "#e7edf4",
                color: "#a7a9ac",
              }}
            >
              <Card.Body>
                <Card.Text style={{ color: "#a7a9ac", fontWeight: "500" }}>
                  We mature our base overnight, before slowly churning each
                  batch with care and attention to detail.
                  <br />
                  <br />
                  Slower churning incorporates less air, resulting in a richer,
                  denser flavour and an irresistible velvety texture.
                  <br />
                  <br />
                  Come visit us and experience the difference.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center align-items-center mb-4 order-md-1"
          >
            <Image src={lemonPhoto} fluid rounded className="shadow-sm" />
          </Col>
        </Row>
        <Row className="text-center my-1">
          <Col>
            <Image
              src={pinkFrame}
              alt="Blue Container"
              className="blue-aboutUs-image"
            />
            <Image
              src={pinkFramePhone}
              alt="Blue Container Phone"
              className="blue-aboutUs-phone"
            />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center p-4">
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center align-items-center mb-4"
          >
            <Image src={bananaFarm} fluid rounded className="shadow-sm" />
          </Col>
          <Col xs={12} md={6} className="mb-4">
            <Card
              className="p-4"
              style={{
                backgroundColor: "#E5BAB4",
                borderRadius: "100px",
                borderColor: "#E5BAB4",
              }}
            >
              <Card.Body>
                <Card.Title
                  className="text-white h4 "
                  style={{ letterSpacing: "0.2em", fontWeight: "800" }}
                >
                  WE USE THE FINEST INGREDIENTS AVAILABLE
                </Card.Title>
                <Card.Text className="text-white" style={{ fontWeight: "500" }}>
                  Luckily many can be found right here in our tropical paradise.
                  <br />
                  <br />
                  Much of the fresh produce we use is from the Atherton
                  tablelands. Sourced from farmers we personally know and trust.
                  <br />
                  <br />
                  We believe in using local ingredients that not only taste
                  amazing but also support our local economy and foster
                  community relationships. <br />
                  <br />
                  It is a bit more expensive, but local means fresher produce,
                  more flavourful gelato, and a smaller carbon footprint.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center p-4">
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center align-items-center mb-4 order-md-2"
          >
            <Image src={cornAbout} fluid rounded className="shadow-sm" />
          </Col>
          <Col xs={12} md={6} className="mb-4 order-md-1">
            <Card
              className="p-4"
              style={{
                backgroundColor: "#E5BAB4",
                borderRadius: "100px",
                borderColor: "#E5BAB4",
              }}
            >
              <Card.Body>
                <Card.Title
                  className="text-white h4"
                  style={{ letterSpacing: "0.2em", fontWeight: "800" }}
                >
                  SUPPORTING LOCAL CAUSES AND CREATING SWEET MOMENTS
                </Card.Title>
                <Card.Text
                  className="text-white "
                  style={{ fontWeight: "500" }}
                >
                  As we are on a mission to spread some happiness, we are always
                  supportive of local causes, donating vouchers for charity
                  raffles or creating sweet moments for overworked hospital
                  staff.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center p-4">
          <Col
            xs={12}
            md={12}
            className="d-flex justify-content-center align-items-center mb-4 order-md-2"
          >
            <Card
              style={{
                width: "100%",
                backgroundColor: "transparent",
                border: "none",
              }}
              className="text-center"
            >
              <Card.Body>
                <Card.Text
                  style={{
                    color: "#CBD7EB",
                    fontWeight: "bold",
                    fontSize: "24px",
                  }}
                >
                  ARE YOU PLANNING A CHARITY EVENT AND NEED SUPPORT? JUST GET IN
                  TOUCH. <br />
                  MAYBE WE CAN HELP.
                </Card.Text>
                <Button
                  href="/contact"
                  variant="outline-secondary "
                  className="rounded-pill mt-4 px-4 fw-bold custom-button"
                >
                  {" "}
                  Contact Us{" "}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="text-center ">
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

export default AboutUs;
