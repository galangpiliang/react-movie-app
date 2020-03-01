import React from "react";
import "../Modal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Signup(props) {
  return (
    <div className="Auths flex center">
      <div className="modal flex center column">
        <h1 className="m-0">Change Avatar</h1>
        <button className="close" onClick={props.toggleModal}>
          <FontAwesomeIcon icon={["fa", "window-close"]} />
        </button>

        <form action="">
          <div className="input-wrapper flex y-center">
            <FontAwesomeIcon className="icon-input" icon={["fa", "image"]} />
            <input type="file" className="input" required />
          </div>

          <button className="button" type="submit">
            <strong>Upload</strong> &ensp;
            <FontAwesomeIcon className="icon-input" icon={["fa", "upload"]} />
          </button>
        </form>
      </div>
    </div>
  );
}
