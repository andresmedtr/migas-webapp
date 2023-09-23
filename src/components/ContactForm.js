import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ContactForm = () => {
  return (
    <div className="pt-5 row">
      <div className="col-5 mt-5">
        <h2 className="pt-5 text-center bordersBottom w-25 mx-auto">
          Contact Us
        </h2>
        <div className="text-center mt-5">
          <h4 className="mb-5">Give us a call: (954)-438-4242</h4>
          <h4>Operation Hours:</h4>
          <h5>Monday - Wednesday: 7:30 AM - 9:00 PM</h5>
          <h5>Thursday - Saturday: 7:30 AM - 10:00 PM</h5>
          <h5>Sunday: 8:00 AM - 9:00 PM</h5>
        </div>
      </div>
      <Form
        className="pt-5 w-25 mx-auto m-0 col-7"
        action="mailto:jodit54498@alvisani.com"
        method="GET"
        enctype="text/plain">
        <h5 className="text-center mx-auto w-100">Suggestions</h5>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="bg bg-dark w-100 text-white border-top rounded-2 text-center">
            Email Address
          </Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
          <Form.Text className="text-muted">
            We will never share your info
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="bg bg-dark w-100 text-white border-top rounded-2 text-center">
            Name
          </Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label className="bg bg-dark w-100 text-white border-top rounded-2 text-center">
            Message
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            contentEditable="true"
            placeholder="Message"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button style={{ background: "#b48303" }} type="submit">
          Submit
        </Button>
      </Form>
      <div className="mt-2">
        <h2 className="text-center mt-5 bordersBottom w-25 mx-auto">
          Reservations:
        </h2>
        <h3 className="text-center">(954)-438-4242</h3>
        <h5 className="text-center">16311 Miramar Pkway, Miramar Fl. 33027</h5>
      </div>
    </div>
  );
};

export default ContactForm;
