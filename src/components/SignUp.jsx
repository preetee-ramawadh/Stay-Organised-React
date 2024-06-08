import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

import { useState } from "react";

export default function SignUp() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Card className="border border-secondary" style={{ width: "30rem" }}>
      <Card.Img variant="top" src="images/start-today.jpeg" />
      <Card.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formGridUsername">
            <FloatingLabel
              controlId="floatingName"
              label="* Enter Your Name"
              className="mb-3"
            >
              <Form.Control
                placeholder="Enter Your Name"
                aria-label="Username"
                aria-describedby="basic-addon1"
                size="lg"
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridUsername">
            <FloatingLabel
              controlId="floatingUsername"
              label="* Enter Your Username"
              className="mb-3"
            >
              <Form.Control
                placeholder="Enter Your Username"
                size="lg"
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <FloatingLabel
                controlId="floatingPassword"
                label="Enter a Password"
                className="mb-3"
              >
                <Form.Control
                  type="password"
                  placeholder="Enter a Password"
                  aria-describedby="passwordHelpBlock"
                  size="lg"
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Please Provide a Password.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridConfirmPassword">
              <FloatingLabel
                controlId="floatingConfirmPassword"
                label="Confirm Password"
                className="mb-3"
              >
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  size="lg"
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Please confirm the password.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Text id="passwordHelpBlock" muted className="mt-0 mb-2">
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </Form.Text>
          </Row>
          <Button
            variant="danger"
            type="submit"
            className="shadow border border-secondary p-2"
            style={{ width: "100%" }}
          >
            Sign Up
          </Button>
        </Form>
      </Card.Body>
      <Card.Footer className="bg-info link-light p-3">
        <Card.Text>
          Already Signed Up?
          <a href="#login" className="link-light">
            {" "}
            Go to Login
          </a>
        </Card.Text>
      </Card.Footer>
    </Card>
  );
}
