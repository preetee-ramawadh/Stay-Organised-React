import { Alert } from "react-bootstrap";
export default function AlertMessage() {
  return (
    <Alert color="danger" className="d-none d-lg-block">
      <strong>USERNAME ALREADY IN USE. CHOOSE ANOTHER</strong>
    </Alert>
  );
}
