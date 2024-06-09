import Card from "react-bootstrap/Card";
// import { useState } from "react";
// import useFetch from "../services/useFetch";
// import Spinner from "../Spinner";

export default function UserTodos({ todos }) {
  todos.length > 0 &&
    todos.map((todo) => {
      return (
        <Card style={{ width: "25rem" }}>
          <Card.Body>
            <Card.Subtitle className="mb-2 ">{todo.deadline}</Card.Subtitle>
            <Card.Text>{todo.description}</Card.Text>
            <Card.Link href="#">See Details</Card.Link>
          </Card.Body>
        </Card>
      );
    });
}
