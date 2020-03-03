import React from "react";
import "../Modal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Loading() {
  return (
    <div className="Auths flex center">
      <div className="modal flex center column">
        <h1 className="m-0">Loading...</h1> &emsp;
        <h1>
          <FontAwesomeIcon className="loader" icon={["fa", "spinner"]} />
        </h1>
      </div>
    </div>
  );
}

export default Loading;
