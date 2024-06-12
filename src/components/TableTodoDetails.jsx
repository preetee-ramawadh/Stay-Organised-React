import Table from "react-bootstrap/Table";
import LinkButton from "./LinkButton";
import { useState } from "react";
import { Button } from "react-bootstrap";
import ModalTaskDetails from "./ModelTaskDetails";
import Task from "./Task";
import useFetch from "../services/useFetch";
import Spinner from "../Spinner";
import { useEffect } from "react";
import ModalEditTask from "./ModalEditTask";

export default function TableTodoDetails({ selectedUser }) {
  console.log("selectedUser in TableTodoDetails", selectedUser);
  console.log("selectedUser type in TableTodoDetails", typeof selectedUser);
  console.log(
    "selectedUser length in TableTodoDetails",
    Object.keys(selectedUser).length
  );
  const {
    data: todos,
    loading,
    error,
  } = useFetch("api/todos/byuser/" + selectedUser?.id); //fetching users todo list

  console.log("todos from useFetch", todos);
  console.log("type of todos", typeof todos);

  // taking initial data in var alltodos using useState
  const [alltodos, setAlltodos] = useState([]);
  console.log("alltodos type immediately after declaring", typeof alltodos);

  useEffect(() => {
    if (todos) {
      setAlltodos(todos);
    }
  }, [todos]);

  console.log("alltodos set from useFetch ", alltodos);
  console.log("alltodos type", typeof alltodos);

  //function to pass to child component to add new todos
  const addnewtoAllTodos = (newTodo) => {
    setAlltodos([...alltodos, newTodo]);
  };

  //function to pass to child component to update todos
  const updateTodo = (updatedTodo) => {
    // Find the index of the task with the provided taskId
    const taskIndex = alltodos.findIndex((todo) => todo.id === updatedTodo.id);

    // Make sure the task exists
    if (taskIndex !== -1) {
      // Create a copy of the tasks array
      const updatedTodos = [...alltodos];

      // Update the task with the new data
      updatedTodos[taskIndex] = {
        ...updatedTodos[taskIndex],
        userid: updatedTodo.id,
        category: updatedTodo.category,
        description: updatedTodo.description,
        deadline: updatedTodo.deadline,
        priority: updatedTodo.priority,
      };

      setAlltodos(updatedTodos);
    }
  };

  console.log("addnewtoAllTodos in TableTodo", alltodos);

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
        // Update alltodos after deletion
        setAlltodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
        //return response.json();
      })
      .catch((error) => {
        console.error("There was a problem with the DELETE request:", error);
      });
  };

  const [showEditModal, setShowEditModal] = useState(false);

  const handleShowEditModal = (todo) => {
    setShowEditModal(true);
    setTodoData(todo);
  };
  const handleCloseEditModal = () => setShowEditModal(false);

  // const [data, setData] = useState(null);
  // const [editError, setEditError] = useState(null);

  // const handleEditClick = async (id) => {
  //   try {
  //     const response = await fetch("https://localhost:8083/api/todos/" + id, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       // Your data to be sent in the request body
  //       body: JSON.stringify({
  //         id: "",
  //         category: "",
  //         description: "",
  //         deadline: "",
  //         priority: "",
  //         completed: "",
  //       }),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     const responseData = await response.json();
  //     setData(responseData);
  //   } catch (editError) {
  //     setEditError(editError.message);
  //     console.log(editError);
  //   }
  // };

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      {selectedUser && (
        <Table
          striped
          className="table table-warning table-hover border border-secondary"
          hidden={todos.length > 0 ? "" : "hidden"}
        >
          <thead>
            <tr className="table-primary">
              <th colSpan={5}> {selectedUser?.name} </th>
            </tr>
            <tr className="table-info">
              <th>TASK DESCRIPTION </th>
              <th>TASK DEADLINE</th>
              <th>SEE DETAILS OF TASK</th>
              <th>DELETE TASK</th>
              <th>EDIT TASK</th>
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
                <td>
                  <LinkButton onClick={() => handleShowEditModal(todo)}>
                    Edit Task
                  </LinkButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <Button onClick={handleClick} className="mb-3">
        Add Task
      </Button>
      {/* Render YourComponent if showComponent is true */}
      {showTaskComponent && (
        <Task
          selecteduser={selectedUser?.name}
          selecteduserID={selectedUser?.id}
          addnewtoAllTodos={addnewtoAllTodos}
        />
      )}{" "}
      <ModalTaskDetails
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        todoData={todoData}
      />
      <ModalEditTask
        showEditModal={showEditModal}
        setShowEditModal={setShowEditModal}
        handleCloseEditModal={handleCloseEditModal}
        todoData={todoData}
        selecteduser={selectedUser?.name}
        selecteduserID={selectedUser?.id}
        updateTodo={updateTodo}
      />
    </>
  );
}
