import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, fab);

export default function index(props) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
