import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function ModalTaskDetails({
  showModal,
  handleCloseModal,
  todoData,
}) {
  const completedTrue = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="currentColor"
      className="bi bi-check-circle-fill text-success"
      viewBox="0 0 16 16"
    >
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
    </svg>
  );
  const completedFalse = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="currentColor"
      className="bi bi-x-circle-fill text-danger"
      viewBox="0 0 16 16"
    >
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
    </svg>
  );
  console.log("todoData in ModalTask");
  console.log(todoData?.completed);
  return (
    <Modal
      show={showModal}
      onHide={handleCloseModal}
      data={todoData}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header closeButton className="bg-info bg-opacity-75">
        <Modal.Title>Task Details</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-secondary bg-opacity-75">
        <div className="container-fluid border border-secondary-subtle">
          <div className="row mt-2 text-start text-light fw-medium">
            <div className="col-5">CATEGORY</div>
            <div className="col" id="category">
              {todoData?.category}
            </div>
          </div>
          <div className="row mt-2 text-start text-light fw-medium">
            <div className="col-5">DESCRIPTION</div>
            <div className="col" id="description">
              {todoData?.description}
            </div>
          </div>
          <div className="row mt-2 text-start text-light fw-medium">
            <div className="col-5">DEADLINE</div>
            <div className="col" id="deadline">
              {todoData?.deadline}
            </div>
          </div>
          <div className="row mt-2 text-start text-light fw-medium">
            <div className="col-5">PRIORITY</div>
            <div className="col badge bg-warning" id="priority">
              {todoData?.priority}
            </div>
          </div>
          <div className="row mt-2 mb-2 text-start text-light fw-medium">
            <div className="col-6">COMPLETED</div>
            <div className="col" id="completed">
              {todoData?.completed ? completedTrue : completedFalse}
            </div>
          </div>
        </div>

        {/* <div>Category: {todoData?.category}</div>
        <div>Description: {todoData?.description}</div>
        <div>Deadline: {todoData?.deadline}</div>
        <div>
          Priority:{" "}
          <span className="badge bg-warning">{todoData?.priority}</span>{" "}
        </div>
        {
          <div>
            Completed: {todoData?.completed ? completedTrue : completedFalse}
          </div>
        } */}
      </Modal.Body>
      <Modal.Footer className="bg-info bg-opacity-75">
        <Button variant="secondary" onClick={handleCloseModal}>
          Back
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
