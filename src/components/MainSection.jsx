import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
export default function MainSection() {
  return (
    <>
      <h1 className="mt-5 display-4 fw-bolder">Organise and Prioritise</h1>
      <h3 className="mt-3 mb-2 fst-italic fw-medium text-success">
        Become focused, organized, and calm with TA-DA. <br />
        Your #1 solution to all your Tasks Managements and Trackings
      </h3>
      <Link
        className="btn btn-success shadow border border-secondary"
        to="/signup"
      >
        Start For Free
      </Link>
      <Image
        alt="quotation"
        src="images/good-system.jpg"
        className="mt-3 rounded"
      />
    </>
  );
}
