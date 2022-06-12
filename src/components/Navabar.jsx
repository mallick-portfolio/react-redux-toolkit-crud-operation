import React from "react";
import { Link } from "react-router-dom";
const Navabar = () => {
  return (
    <div>
      <ul>
        <Link to={"/"}>Home</Link>
        <li></li>
        <Link to={"/"}>Show book</Link>
        <li></li>
        <Link to={"/addbook"}>addbook</Link>
        <li></li>
      </ul>
    </div>
  );
};

export default Navabar;
