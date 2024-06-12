import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import { useState, useEffect } from "react";
import useFetch from "../services/useFetch";
import Spinner from "../Spinner";
import TableTodoDetails from "./TableTodoDetails";

export default function UsersNavDropdown() {
  const [allUsers, setAllUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(""); // State to store selected user ID
  const [selectedUser, setSelectedUser] = useState({}); // State to store selected user

  const { data: users, loading, error } = useFetch("api/users"); //fetching list of users

  console.log("users from useFetch");
  console.log(users);

  useEffect(() => {
    if (users) {
      setAllUsers(users);
    }
  }, [users]);

  console.log("all users:");
  console.log(allUsers);
  //console.log(allUsers.length);

  const handleSelect = (eventKey) => {
    console.log("Selected user ID eventkey:", eventKey);
    setSelectedUserId(eventKey);
    console.log("Selected user ID:", selectedUserId);
  };

  useEffect(() => {
    if (allUsers.length > 0 && selectedUserId !== "") {
      setSelectedUser((prevUser) => {
        console.log("selected user", selectedUser);
        return (
          allUsers.find((user) => user.id === parseInt(selectedUserId)) || ""
        );
      });
    }
  }, [allUsers, selectedUserId, selectedUser]);

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <NavDropdown
        title="Users"
        id="userDropdown"
        onSelect={handleSelect}
        className="border border-success bg-primary fw-bold "
      >
        {allUsers?.map((user) => {
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
      <TableTodoDetails selectedUser={selectedUser} />
    </>
  );
}
