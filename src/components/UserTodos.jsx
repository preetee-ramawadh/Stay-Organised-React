import Card from "react-bootstrap/Card";

export default function UserTodos({ todos }) {
  todos = [
    {
      id: 3,
      userid: 1,
      category: "Financial Task",
      description: "Earn $10 for VBucks",
      deadline: "2022-12-08",
      priority: "High",
      completed: false,
    },
    {
      id: 11,
      userid: 1,
      category: "Work Task",
      description: "Paint Mr. Westly's Fence",
      deadline: "2023-04-18",
      priority: "Medium",
      completed: false,
    },
  ];

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
