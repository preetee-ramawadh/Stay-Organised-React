import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import MyNav from "./MyNav";

export default function NavBar() {
  return (
    <>
      <Navbar
        expand="lg"
        className="fixed-top page-header bg-info shadow fw-bold"
      >
        <Container className="container-fluid">
          <Navbar.Brand href="/">
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
            <MyNav />

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
    </>
  );
}
