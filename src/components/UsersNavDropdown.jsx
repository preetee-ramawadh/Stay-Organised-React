import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import { useState } from "react";
import useFetch from "../services/useFetch";
import Spinner from "../Spinner";
import Table from "react-bootstrap/Table";
import LinkButton from "./LinkButton";
import ModalTaskDetails from "./ModelTaskDetails";
import Button from "react-bootstrap/esm/Button";
import Task from "./Task";

export default function UsersNavDropdown({ sendUserIdToParent }) {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const [todoData, setTodoData] = useState([]);
  const handleShowModal = (todo) => {
    setShowModal(true);
    setTodoData(todo);
  };

  const [selectedUserId, setSelectedUserId] = useState(""); // State to store selected user ID
  //const [selectedUserName, setSelectedUserName] = useState(""); // State to store selected user NAME

  const { data: users, loading, error } = useFetch("api/users"); //fetching list of users

  const [showTaskComponent, setShowTaskComponent] = useState(false);

  console.log(users);

  console.log("selectedUserId in UsersNavDropDown");
  console.log(selectedUserId);

  const handleSelect = (eventKey) => {
    setSelectedUserId(eventKey);
  };

  const {
    data: todos,
    loading1,
    error1,
  } = useFetch("api/todos/byuser/" + selectedUserId); //fetching users todo list
  console.log(todos);
  // Find the selected user object based on the selected user ID
  const selectedUser = users?.find(
    (user) => user.id === parseInt(selectedUserId)
  );
  console.log("selectedUser");
  console.log(selectedUser?.id);

  const handleClick = () => {
    setShowTaskComponent(true); // Set showComponent to true when the button is clicked
  };

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (loading) {
    return <Spinner />;
  }

  if (error1) {
    return <div>Error: {error1}</div>;
  }
  if (loading1) {
    return <Spinner />;
  }

  return (
    <>
      <NavDropdown title="Users" id="userDropdown" onSelect={handleSelect}>
        {users?.map((user) => {
          return (
            <NavDropdown.Item
              eventKey={user.id}
              key={user.id}
              id={user.id}
              value={user.id}
              className="bg-warning bg-opacity-25"
            >
              <Image
                src="../images/logo.jpeg"
                alt={user.name}
                style={{ height: "20px", width: "20px" }}
              ></Image>
              <span> {user.name} </span>
            </NavDropdown.Item>
          );
        })}
      </NavDropdown>
      <Table striped>
        <thead>
          <tr>
            <th colSpan={3}>Tasks Against User {selectedUser?.name} </th>
          </tr>
          <tr>
            <th>TASK DESCRIPTION </th>
            <th>TASK DEADLINE</th>
            <th>SEE DETAILS OF TASK?</th>
          </tr>
        </thead>
        <tbody>
          {todos?.map((todo) => {
            return (
              <tr>
                <td>{todo.description}</td>
                <td>{todo.deadline}</td>
                <td>
                  <LinkButton onClick={() => handleShowModal(todo)}>
                    See Details
                  </LinkButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {/* <Button onClick={() => passUserName(selectedUser?.name)}> */}
      <Button onClick={handleClick}>Add Task</Button>
      {showTaskComponent && (
        <Task
          selecteduser={selectedUser?.name}
          selecteduserID={selectedUser?.id}
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
