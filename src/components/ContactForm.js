import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ContactForm = () => {
  return (
    <div>
      <h1 className="pt-5 text-center bordersBottom w-25 mx-auto">
        Contact Us
      </h1>
      <Form className="pt-5 w-25 mx-auto m-0">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="bg bg-dark w-100 text-white border-top rounded-2 text-center">
            Email Address
          </Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
          <Form.Text className="text-muted">
            We will never share your info
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="bg bg-dark w-100 text-white border-top rounded-2 text-center">
            Name
          </Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
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
    </div>
  );
};

export default ContactForm;
