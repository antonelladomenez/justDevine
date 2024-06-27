import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ContactForm.css"; // Asegúrate de crear este archivo para estilos personalizados
import FrameWoodWhite from "../components/FrameWoodWhite";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_jbgvq7c",
        "template_uyszcsc",
        formData,
        "cZAzUoyFdYVqa5ydj"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Mensaje enviado exitosamente");
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Fallo en el envío del mensaje");
        }
      );

    // Opcional: limpiar el formulario después del envío
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact">
      <Container fluid className="contact-page">
        <Menu />
        <FrameWoodWhite />
        <Container className="contact-form-container p-2">
          <Row className="justify-content-md-center">
            <Col md={6}>
              <h2 className="text-center mb-1">Get in touch</h2>
              <p className="text-center mb-1">Let us know how we can help</p>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName" className="mb-2">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    className="div-4 form-control-custom"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-2">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    className="div-4 form-control-custom"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formMessage" className="mb-2">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    className="div-4 form-control-custom"
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <div className="d-flex justify-content-center">
                  <Button
                    type="submit"
                    variant="outline-secondary "
                    className="rounded-pill mt-4 px-4 fw-bold custom-button"
                  >
                    SEND
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Container>
    </div>
  );
};

export default ContactForm;
