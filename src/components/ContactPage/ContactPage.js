import React from "react";
import "./ContactPage.css";
import { Col, Row, Container } from "react-bootstrap";
import ContactForm from "../ContactForm/ContactForm.js";

const ContactPage = () => {
  return (
    <Container>
      <div className="outer-contact-info">
        <div className="contact-info">
          <ContactForm />
        </div>
      </div>
    </Container>
  );
};

export default ContactPage;
