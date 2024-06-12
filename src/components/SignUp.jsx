import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { InputGroup } from "react-bootstrap";
import PasswordIcon from "./PasswordIcon";

import { useState } from "react";
import Asteric from "./Asteric";
//import AlertMessage from "./AlertMessage";

export default function SignUp() {
  const [validated, setValidated] = useState(false);

  // const [formData, setFormData] = useState({
  //   // Initialize form data fields
  //   name: "",
  //   username: "",
  //   password: "",
  //   confirmpassword: "",
  // });
  // const handleChange = (e) => {
  //   // Update the form data state when input values change
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();

      //return; // Exit early if the form is invalid
    }
    setValidated(true);

    // Send the request
    fetch("http://localhost:8083/api/users", {
      method: "POST",
      //body: JSON.stringify(formData),
      body: JSON.stringify(""),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.status === 403) {
          throw new Error("USERNAME ALREADY IN USE. CHOOSE ANOTHER");
          //<AlertMessage />;
        }
        // Reset form fields to their initial state (empty)
        // setFormData({
        //   name: "",
        //   username: "",
        //   password: "",
        //   confirmpassword: "",
        // });
        response.json();
      })
      .then((taskdata) => {
        console.log("Success:", taskdata);
        // Handle the response data as needed
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors
      });
  };
  return (
    <Card className="border border-secondary" style={{ width: "33rem" }}>
      <Card.Img variant="top" src="images/start-today.jpeg" />
      <Card.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="formGroupName" className="shadow">
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrependName">
                <Asteric />
              </InputGroup.Text>
              <FloatingLabel controlId="floatingName" label="Enter your Name">
                <Form.Control
                  type="text"
                  placeholder="your name"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Please enter Your Name.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="formGroupUserName" className="shadow">
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrependUserName">
                <Asteric />
              </InputGroup.Text>
              <FloatingLabel
                controlId="floatingUserName"
                label="Enter your User Name"
              >
                <Form.Control
                  type="text"
                  placeholder="your user name"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Please enter Your User Name.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGroupPassword">
              <InputGroup hasValidation className="shadow">
                <InputGroup.Text id="inputGroupPrependPassword">
                  <PasswordIcon />
                </InputGroup.Text>
                <FloatingLabel
                  controlId="floatingPassword"
                  label="Enter Password"
                >
                  <Form.Control
                    type="password"
                    placeholder="enter password"
                    aria-describedby="inputGroupPrepend"
                    size="lg"
                    required
                  />
                </FloatingLabel>
                <Form.Control.Feedback type="invalid">
                  Please Provide a Password.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} controlId="formGroupConfPassword">
              <InputGroup hasValidation className="shadow">
                <InputGroup.Text id="inputGroupPrependConfPassword">
                  <PasswordIcon />
                </InputGroup.Text>
                <FloatingLabel
                  controlId="floatingConfPassword"
                  label="Confirm Password"
                >
                  <Form.Control
                    type="password"
                    placeholder="confirm password"
                    aria-describedby="inputGroupPrepend"
                    size="lg"
                    required
                  />
                </FloatingLabel>
                <Form.Control.Feedback type="invalid">
                  Please Confirm Password.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Text id="passwordHelpBlock" muted className="mt-2 mb-2">
              Your password must be 8-20 characters long
            </Form.Text>
          </Row>
          <Button
            variant="danger"
            type="submit"
            className="shadow border border-secondary p-2 shadow"
            style={{ width: "100%" }}
          >
            Sign Up
          </Button>
        </Form>
      </Card.Body>
      <Card.Footer className="bg-info link-light p-3">
        <Card.Text>
          Already Signed Up?
          <Link to="/login" className="link-light">
            {" "}
            Go to Login
          </Link>
        </Card.Text>
      </Card.Footer>
    </Card>
  );
}
