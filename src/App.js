import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
import Confirmation from "./components/Confirmation";
import AddressDetails from "./components/AddressDetails";

export default function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/cart">
        <Cart></Cart>
      </Route>
      <Route path="/checkout">
        <Checkout></Checkout>
      </Route>
      <Route path="/payment">
        <Payment></Payment>
      </Route>
      <Route path="/confirmation">
        <Confirmation></Confirmation>
      </Route>
      <Route path="/addressDetails">
        <AddressDetails></AddressDetails>
      </Route>
    </Router>
  );
}
