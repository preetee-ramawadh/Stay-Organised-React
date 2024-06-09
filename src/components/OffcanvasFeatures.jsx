import Offcanvas from "react-bootstrap/Offcanvas";

export default function OffcanvasFeatures({
  showFeatures,
  handleFeatureClose,
}) {
  return (
    <Offcanvas show={showFeatures} onHide={handleFeatureClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Features</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>trying features offcanvas</Offcanvas.Body>
    </Offcanvas>
  );
}
