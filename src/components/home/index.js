import React from "react";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <div>
      <hr />
      This is Home component
      <br />
      <Link to="/detail">Go Detail</Link>
      <hr />
    </div>
  );
}