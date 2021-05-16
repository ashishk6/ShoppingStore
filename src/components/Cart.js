import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div>
      <h1>Cart Component</h1>
      <button>
        <Link to="/addressDetails">Address Details</Link>
      </button>
    </div>
  );
}
