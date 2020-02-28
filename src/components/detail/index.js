import React from "react";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <div>
      <hr />
      This is Detail component
      <br />
      <Link to="/">Go Home</Link>
      <hr />
    </div>
  );
}
