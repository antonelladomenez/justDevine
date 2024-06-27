import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import woodFrame from "../images/shortWood.png";
import woodFramePhoneShort from "../images/shortWoodphone.png";

const FrameWoodWhite = () => {
  return (
    <Row className="text-center">
      <Col>
        <Image
          src={woodFrame}
          alt="Wood Container"
          className="short-wood-image"
        />
        <Image
          src={woodFramePhoneShort}
          alt="Blue Container Phone"
          className="short-wood-image-phone"
        />
      </Col>
    </Row>
  );
};

export default FrameWoodWhite;
