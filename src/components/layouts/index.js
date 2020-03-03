import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Loading from "../layouts/modal/loading";

// Redux
import { useSelector } from "react-redux";

function Index(props) {
  const stateLoading = useSelector(state => state.loading);
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
      {stateLoading ? <Loading /> : false}
    </div>
  );
}

export default Index;
