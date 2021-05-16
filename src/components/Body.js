import { useEffect, useState } from "react";
import "./Body.css";

export default function Body() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    // Update the document title using the browser API
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setItem(json));
  });

  const list = item.map((xyz) => (
    <div className="twoBody">
      <img className="oneBody" src={xyz.image}></img>
      <h6>{xyz.title}</h6>
      <h6>{xyz.price}</h6>
      <button className="fourBody">Add to Cart</button>
    </div>
  ));
  return <div className="threeBody">{list}</div>;
}
