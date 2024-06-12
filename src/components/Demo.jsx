import Table from "react-bootstrap/Table";
import LinkButton from "./LinkButton";
import { useState } from "react";
import { Button } from "react-bootstrap";
import ModalTaskDetails from "./ModelTaskDetails";
import Task from "./Task";

export default function TableTodoDetails({
  selectedUser,
  alltodos,
  updateAllTodos,
}) {
  console.log("typeof alltodos");
  console.log(typeof alltodos);
  //alltodos = Array.from(alltodos);
  // console.log("typeof alltodos after applying Array.from");
  // console.log(typeof alltodos);

  const [showModal, setShowModal] = useState(false);

  const [todoData, setTodoData] = useState([]);
  const handleShowModal = (todo) => {
    setShowModal(true);
    setTodoData(todo);
  };
  const handleCloseModal = () => setShowModal(false);
  const [showTaskComponent, setShowTaskComponent] = useState(false);

  const handleClick = () => {
    setShowTaskComponent(true); // Set showComponent to true when the button is clicked
  };

  const handleDeleteClick = (id) => {
    console.log(id);
    fetch("http://localhost:8083/api/todos/" + id, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .catch((error) => {
        console.error("There was a problem with the DELETE request:", error);
      });
  };

  return (
    <>
      {selectedUser && (
        <Table
          striped
          className="table table-warning table-hover border border-secondary "
        >
          <thead>
            <tr className="table-primary">
              <th colSpan={4}> {selectedUser?.name} </th>
            </tr>
            <tr className="table-info">
              <th>TASK DESCRIPTION </th>
              <th>TASK DEADLINE</th>
              <th>SEE DETAILS OF TASK?</th>
              <th>DELETE TASK?</th>
            </tr>
          </thead>
          <tbody>
            {/* alltodos should be an array not object */}
            {alltodos?.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.description}</td>
                <td>{todo.deadline}</td>
                <td>
                  <LinkButton onClick={() => handleShowModal(todo)}>
                    See Details
                  </LinkButton>
                </td>
                <td>
                  <LinkButton onClick={() => handleDeleteClick(todo.id)}>
                    Delete Task
                  </LinkButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <Button onClick={handleClick}>Add Task</Button>
      {showTaskComponent && (
        <Task
          selecteduser={selectedUser?.name}
          selecteduserID={selectedUser?.id}
          updateAllTodos={updateAllTodos}
        />
      )}{" "}
      {/* Render YourComponent if showComponent is true */}
      <ModalTaskDetails
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        todoData={todoData}
      />
    </>
  );
}
