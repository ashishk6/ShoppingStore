import { Link } from "react-router-dom";

export default function Payment() {
  return (
    <div>
      <h1>Payment Component</h1>
      <button>
        <Link to="/confirmation">Order Confirmation </Link>
      </button>
    </div>
  );
}
