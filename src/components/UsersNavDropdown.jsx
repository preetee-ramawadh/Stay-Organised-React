import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import { useState } from "react";
import useFetch from "../services/useFetch";
import Spinner from "../Spinner";

export default function UsersNavDropdown() {
  const [selectedUserId, setSelectedUserId] = useState(""); // State to store selected user ID

  const { data: users, loading, error } = useFetch("api/users"); //fetching list of users
  console.log(users);

  const handleSelect = (eventKey) => {
    setSelectedUserId(eventKey);
    console.log(selectedUserId);
  };
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (loading) {
    return <Spinner />;
  }

  // Find the selected user object based on the selected user ID
  const selectedUser = users.find((user) => user.id === selectedUserId);
  console.log(selectedUser);

  return (
    <NavDropdown title="Users" id="userDropdown" onSelect={handleSelect}>
      {users.length > 0 &&
        users.map((user) => {
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
  );
}
