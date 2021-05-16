import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h1>Shopping Store</h1>
      <button>
        <Link to="/cart">Go to Cart</Link>
      </button>
    </div>
  );
}
