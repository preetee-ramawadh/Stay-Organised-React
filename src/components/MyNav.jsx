import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import OffcanvasFeatures from "./OffcanvasFeatures";
import OffcanvasResources from "./OffcanvasResources";
import ModalSubscribe from "./ModalSubscribe";
import { useState } from "react";
//import UsersNavDropdown from "./UsersNavDropdown";

export default function MyNav({ users, sendUserIdToMyNavBar }) {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const [showFeatures, setShowFeatures] = useState(false);
  const handleFeatureClose = () => setShowFeatures(false);
  const handleFeaturesShow = () => setShowFeatures(true);

  const [showResources, setShowResources] = useState(false);
  const handleResourcesClose = () => setShowResources(false);
  const handleResourcesShow = () => setShowResources(true);

  return (
    <>
      <Nav className="me-auto">
        <NavDropdown title="Company" id="companyDropdown">
          <NavDropdown.Item>About Us</NavDropdown.Item>
          <NavDropdown.Item>Company Policies</NavDropdown.Item>
          <NavDropdown.Item>Contact Us</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>FAQs</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link onClick={handleFeaturesShow}>Features</Nav.Link>
        <Nav.Link onClick={handleResourcesShow}>Resources</Nav.Link>
        <Nav.Link onClick={handleShowModal}>Subscribe</Nav.Link>

        {/* <UsersNavDropdown
          users={users}
          sendUserIdToMyNav={sendUserIdToMyNavBar}
        /> */}
      </Nav>

      <OffcanvasFeatures
        showFeatures={showFeatures}
        handleFeatureClose={handleFeatureClose}
      />

      <OffcanvasResources
        showResources={showResources}
        handleResourcesClose={handleResourcesClose}
      />

      <ModalSubscribe
        showModal={showModal}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
}
