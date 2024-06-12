import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import useFetch from "../services/useFetch";
// import Spinner from "../Spinner";
import { useEffect, useState } from "react";

export default function ModalEditTask({
  showEditModal,
  setShowEditModal,
  handleCloseEditModal,
  todoData,
  selecteduser,
  selecteduserID,
  updateTodo,
}) {
  console.log("todoData in ModalEdit", todoData);

  //const navigate = useNavigate();

  const [validated, setValidated] = useState(false);
  console.log(validated);

  // const [formData, setFormData] = useState({
  //   // Initialize form data fields
  //   userid: selecteduserID,
  //   category: "Personal Task",
  //   description: "",
  //   deadline: "",
  //   priority: "Low",
  // });

  // const handleChange = (e) => {
  //   // Update the form data state when input values change
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const [todoedit, setTodoedit] = useState({});
  //const [errors, setErrors] = useState({});

  useEffect(() => {
    setTodoedit(todoData);
    //setErrors({});
  }, [todoData]);

  console.log("todoedit populated from todoData", todoedit);

  const EditTask = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);

    // Make the PUT request using fetch
    fetch("http://localhost:8083/api/todos/" + todoData.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoedit),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Reset form fields to their initial state (previous state)
        setTodoedit({
          userid: selecteduserID,
          category: todoData.category,
          description: todoData.description,
          deadline: todoData.deadline,
          priority: todoData.priority,
        });
        return response.json();
      })
      .then((editTaskData) => {
        console.log("Success:", editTaskData);
        // update the todos data using addTodo
        updateTodo(todoedit);
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors
      });

    setShowEditModal(false);
  };

  return (
    <Modal
      show={showEditModal}
      onHide={handleCloseEditModal}
      selecteduser={selecteduser}
      data={todoData}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header closeButton className="bg-info bg-opacity-75">
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-secondary bg-opacity-75">
        <Form>
          <Form.Group className="mb-3" controlId="formGridUsername">
            <FloatingLabel
              controlId="floatingName"
              label="User"
              className="mb-3"
            >
              <Form.Control
                className="border border-secondary"
                placeholder="User Name"
                aria-label="Username"
                aria-describedby="Username"
                size="lg"
                name="userid"
                value={selecteduser}
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
                  className="border border-secondary"
                  name="category"
                  value={todoData?.category}
                  disabled
                >
                  <option key="Personal Task">Personal Task</option>
                  <option key="Household Task">Household Task</option>
                  <option key="Financial Task">Financial Task</option>
                  <option key="Help Others">Help Others</option>
                  <option key="Errand">Errand</option>
                  <option key="Work Task">Work Task</option>
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
                  className="border border-secondary"
                  name="priority"
                  value={todoedit?.priority}
                  onChange={(e) =>
                    setTodoedit({ ...todoedit, priority: e.target.value })
                  }
                >
                  <option key="low">Low</option>
                  <option key="medium">Medium</option>
                  <option key="high">High</option>
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
                className="border border-secondary"
                type="date"
                placeholder="deadline"
                size="lg"
                name="deadline"
                value={todoedit?.deadline}
                onChange={(e) =>
                  setTodoedit({ ...todoedit, deadline: e.target.value })
                }
                required
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridDescription">
            <FloatingLabel
              controlId="floatingDescription"
              label="Enter Description"
              className="mb-3"
            >
              <Form.Control
                className="border border-secondary"
                as="textarea"
                rows={3}
                placeholder="Description"
                size="lg"
                name="description"
                value={todoedit?.description}
                onChange={(e) =>
                  setTodoedit({ ...todoedit, description: e.target.value })
                }
                required
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridCompleted">
            <FloatingLabel
              controlId="floatingCompleted"
              label="Change Completion Status"
              className="mb-3"
            >
              <Form.Select
                className="border border-secondary"
                name="completed"
                value={todoData?.completed}
                onChange={(e) =>
                  setTodoedit({ ...todoedit, completed: e.target.value })
                }
              >
                <option key="true">true</option>
                <option key="false">false</option>
              </Form.Select>
            </FloatingLabel>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="bg-info bg-opacity-75">
        <Button
          variant="secondary"
          onClick={handleCloseEditModal}
          className="border border-secondary"
        >
          Back
        </Button>
        <Button
          variant="primary"
          onClick={EditTask}
          className="border border-secondary"
        >
          Edit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
