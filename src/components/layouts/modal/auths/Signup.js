import React from "react";
import "./Auths.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Signup(props) {
  return (
    <div className="Auths flex center">
      <div className="modal flex center column">
        <h1 className="m-0">Sign up</h1>
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
          <div className="input-wrapper flex y-center">
            <FontAwesomeIcon className="icon-input" icon={["fa", "key"]} />
            <input
              type="password"
              placeholder="Input Your Password..."
              className="input"
              required
            />
          </div>
          <div className="input-wrapper flex y-center">
            <FontAwesomeIcon className="icon-input" icon={["fa", "key"]} />
            <input
              type="password"
              placeholder="Confirm Your Password..."
              className="input"
              required
            />
          </div>

          <button className="button" type="submit">
            <strong>Sign up</strong> &ensp;
            <FontAwesomeIcon
              className="icon-input"
              icon={["fa", "sign-in-alt"]}
            />
          </button>
        </form>

        <p>
          {" "}
          Already have an account?{" "}
          <a id={props.signin} href="/#" onClick={props.toggleModal}>
            Sign in here
          </a>
        </p>
      </div>
    </div>
  );
}
