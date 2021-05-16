import { Link } from "react-router-dom";

export default function AddressDetails() {
  return (
    <div>
      <h1>AddressDetails Component</h1>
      <button>
        <Link to="/checkout">Checkout</Link>
      </button>
    </div>
  );
}
