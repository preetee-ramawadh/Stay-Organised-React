import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
//import { useNavigate } from "react-router-dom";
import useFetch from "../services/useFetch";
import Spinner from "../Spinner";

import { useState } from "react";

export default function Task({ selecteduser, selecteduserID, updateAllTodos }) {
  const [showCard, setShowCard] = useState(true);
  const handleCancel = () => {
    setShowCard(false);
  };

  const { data: categories, loading, error } = useFetch("api/categories"); //fetching categories list
  console.log(categories);
  console.log(selecteduser);

  //const navigate = useNavigate();

  const [validated, setValidated] = useState(false);
  console.log(validated);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const [formData, setFormData] = useState({
    // Initialize form data fields
    userid: selecteduserID,
    category: "Personal Task",
    description: "",
    deadline: "",
    priority: "Low",
  });

  const handleChange = (e) => {
    // Update the form data state when input values change
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const AddTask = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);

    // Make the POST request using fetch
    fetch("http://localhost:8083/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Reset form fields to their initial state (empty)
        setFormData({
          userid: selecteduserID,
          category: "Personal Task",
          description: "",
          deadline: "",
          priority: "Low",
        });
        return response.json();
      })
      .then((taskdata) => {
        console.log("Success:", taskdata);
        // update the todos data using addTodo
        updateAllTodos({
          userid: selecteduserID,
          category: taskdata.category,
          description: taskdata.description,
          deadline: taskdata.deadline,
          priority: taskdata.priority,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors
      });
  };

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      {showCard && (
        <Card className="border border-secondary" style={{ width: "30rem" }}>
          <Card.Img variant="top" src="images/todobossday.jpeg" />
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formGridUsername">
                <FloatingLabel
                  controlId="floatingName"
                  label="User"
                  className="mb-3"
                >
                  <Form.Control
                    placeholder="User Name"
                    aria-label="Username"
                    aria-describedby="Username"
                    size="lg"
                    name="userid"
                    value={selecteduser}
                    onChange={handleChange}
                    //readOnly
                    disabled
                  />
                </FloatingLabel>
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCategory">
                  <FloatingLabel
                    controlId="floatingCategory"
                    label="Category"
                    className="mb-3"
                  >
                    <Form.Select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                    >
                      {categories?.map((category) => {
                        return (
                          <option key={category.name} value={category.name}>
                            {category.name}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPriority">
                  <FloatingLabel
                    controlId="floatingPriority"
                    label="Priority"
                    className="mb-3"
                  >
                    <Form.Select
                      name="priority"
                      value={formData.priority}
                      onChange={handleChange}
                    >
                      <option key="low" className="badge bg-primary">
                        Low
                      </option>
                      <option key="medium" className="badge bg-primary">
                        Medium
                      </option>
                      <option key="high" className="badge bg-primary">
                        High
                      </option>
                    </Form.Select>
                  </FloatingLabel>
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" controlId="formGridDeadline">
                <FloatingLabel
                  controlId="floatingDeadline"
                  label="* Assign Deadline"
                  className="mb-3"
                >
                  <Form.Control
                    type="date"
                    placeholder="deadline"
                    size="lg"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridDescription">
                <FloatingLabel
                  controlId="floatingDescription"
                  label="Enter Description"
                  className="mb-3"
                >
                  <Form.Control
                    type="textarea"
                    placeholder="Description"
                    size="lg"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
            </Form>
          </Card.Body>
          <Card.Footer className="bg-info link-light p-3">
            <Button
              variant="secondary"
              // type="submit"
              className="shadow border border-secondary p-2 me-4"
              style={{ width: "45%" }}
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              variant="danger"
              type="submit"
              className="shadow border border-secondary p-2"
              style={{ width: "45%" }}
              onClick={AddTask}
            >
              ADD
            </Button>
          </Card.Footer>
        </Card>
      )}
    </>
  );
}
