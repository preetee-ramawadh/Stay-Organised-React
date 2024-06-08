import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  return (
    <>
      <Navbar
        expand="lg"
        className="fixed-top page-header bg-info shadow fw-bold"
      >
        <Container className="container-fluid">
          <Navbar.Brand href="#home">
            <Image
              alt="logo"
              src="images/logo.jpeg"
              width="42"
              height="40"
              className="d-inline-block align-top rounded"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Company" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Company Policies
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Contact Us
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">FAQs</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={handleShow}>Features</Nav.Link>
              <Nav.Link onClick={handleShow1}>Resources</Nav.Link>
              <Nav.Link onClick={handleShowModal}>Subscribe</Nav.Link>
              <NavDropdown title="Users" id="userDropdown">
                <NavDropdown.Item href="#action/3.1">user1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">user2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">user3</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">user4</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Link
              className=" d-flex me-2 shadow btn btn-danger border border-secondary"
              to="/login"
            >
              Log In
            </Link>
            <div className="vr"></div>
            <Link
              className="d-flex ms-2 shadow btn btn-success border border-secondary"
              to="/signup"
            >
              Start For Free
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Features</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>trying features offcanvas</Offcanvas.Body>
      </Offcanvas>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Do not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>

      <Offcanvas show={show1} onHide={handleClose1}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
