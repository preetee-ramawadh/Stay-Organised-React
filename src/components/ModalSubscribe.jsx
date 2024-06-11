import Modal from "react-bootstrap/Modal";

export default function ModalSubscribe({ showModal, handleCloseModal }) {
  return (
    <Modal
      show={showModal}
      onHide={handleCloseModal}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Task Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>hi there</div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
