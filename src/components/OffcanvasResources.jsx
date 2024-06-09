import Offcanvas from "react-bootstrap/Offcanvas";

export default function OffcanvasResources({
  showResources,
  handleResourcesClose,
}) {
  return (
    <Offcanvas show={showResources} onHide={handleResourcesClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
      </Offcanvas.Body>
    </Offcanvas>
  );
}
