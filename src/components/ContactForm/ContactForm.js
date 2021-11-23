import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Form, Button, Container } from "react-bootstrap";
import "./ContactForm.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("mknkyzol");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <Form className="contact-form" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Your email address</Form.Label>
        <Form.Control id="email" type="email" placeholder="name@example.com" />
      </Form.Group>

      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <Form.Group
        id="message"
        className="mb-3"
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Label>Contact message</Form.Label>
        <Form.Control
          className="error-message"
          as="textarea"
          rows={5}
          style={{ resize: "none" }}
        >
          Unfortunately this component is currently not working. I am trying to
          resolve this issue ASAP.
        </Form.Control>
      </Form.Group>

      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <Button variant="dark" type="submit" onClick={handleSubmit}>
        Send
      </Button>
    </Form>
    // <div className="contact-form">
    //   <form onSubmit={handleSubmit}>
    //     <label htmlFor="email">Email Address</label>
    //     <input id="email" type="email" name="email" />

    //     <ValidationError prefix="Email" field="email" errors={state.errors} />
    //     <textarea
    //       id="message"
    //       name="message"
    //       style={{ resize: "none" }}
    //       rows={5}
    //     />
    //     <ValidationError
    //       prefix="Message"
    //       field="message"
    //       errors={state.errors}
    //     />
    //     <button className="button" type="submit" disabled={state.submitting}>
    //       Submit
    //     </button>
    //   </form>
    // </div>
  );
}

export default ContactForm;
