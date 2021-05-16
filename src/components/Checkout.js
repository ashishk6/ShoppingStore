import { Link } from "react-router-dom";

export default function Checkout() {
  return (
    <div>
      <h1>Checkout Component</h1>
      <button>
        <Link to="/payment">Payment Details</Link>
      </button>
    </div>
  );
}
