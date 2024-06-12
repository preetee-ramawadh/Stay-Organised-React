import React, { useState, useEffect } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import Spinner from "../Spinner";
import TableTodoDetails from "./TableTodoDetails";

export default function NavDropdownUsers() {
  const [selectedUserId, setSelectedUserId] = useState("");
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [errorUsers, setErrorUsers] = useState(null);
  const [todos, setTodos] = useState([]);
  const [loadingTodos, setLoadingTodos] = useState(false);
  const [errorTodos, setErrorTodos] = useState(null);

  useEffect(() => {
    // Fetch users
    fetch("api/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoadingUsers(false);
        console.log(loadingUsers);
      })
      .catch((error) => {
        setErrorUsers(error.message);
        setLoadingUsers(false);
      });
  }, []);

  const handleSelect = (eventKey) => {
    setSelectedUserId(eventKey);
    // Fetch todos for the selected user
    setLoadingTodos(true);
    fetch(`api/todos/byuser/${eventKey}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch todos");
        }
        return response.json();
      })
      .then((data) => {
        setTodos(data);
        setLoadingTodos(false);
      })
      .catch((error) => {
        setErrorTodos(error.message);
        setLoadingTodos(false);
      });
  };

  if (errorUsers) {
    return <div>Error fetching users: {errorUsers}</div>;
  }

  return (
    <>
      <NavDropdown
        title="Users"
        id="userDropdown"
        onSelect={handleSelect}
        className="border border-success bg-primary fw-bold"
      >
        <NavDropdown.Item key="default">Select User</NavDropdown.Item>
        {users.map((user) => (
          <NavDropdown.Item
            key={user.id}
            eventKey={user.id}
            id={user.id}
            value={user.id}
          >
            <Image
              src="../images/logo.jpeg"
              alt={user.name}
              style={{ height: "20px", width: "20px" }}
            />
            <span> {user.name} </span>
          </NavDropdown.Item>
        ))}
      </NavDropdown>
      {selectedUserId && (
        <>
          {errorTodos && <div>Error fetching todos: {errorTodos}</div>}
          {loadingTodos ? (
            <Spinner />
          ) : (
            <TableTodoDetails selectedUserId={selectedUserId} todos={todos} />
          )}
        </>
      )}
    </>
  );
}
