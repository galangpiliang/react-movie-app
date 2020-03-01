import React from "react";
import "../Modal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Signin(props) {
  return (
    <div className="Auths flex center">
      <div className="modal flex center column">
        <h1 className="m-0">Update Profile</h1>
        <button className="close" onClick={props.toggleModal}>
          <FontAwesomeIcon icon={["fa", "window-close"]} />
        </button>

        <form action="">
          <div className="input-wrapper flex y-center">
            <FontAwesomeIcon className="icon-input" icon={["fa", "user"]} />
            <input
              type="text"
              placeholder="Input Your Username..."
              className="input"
              required
            />
          </div>
          <div className="input-wrapper flex y-center">
            <FontAwesomeIcon className="icon-input" icon={["fa", "envelope"]} />
            <input
              type="email"
              placeholder="Input Your Email..."
              className="input"
              required
            />
          </div>

          <button className="button" type="submit">
            <strong>Update</strong> &ensp;
            <FontAwesomeIcon className="icon-input" icon={["fa", "sync-alt"]} />
          </button>
        </form>
      </div>
    </div>
  );
}
