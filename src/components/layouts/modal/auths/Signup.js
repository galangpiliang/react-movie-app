import React, { useState } from "react";
import "../Modal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Redux
import { useDispatch } from "react-redux";
import { ACTION_SIGN_UP } from "../../../../stores/actions/auth";

export default function Signup(props) {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
    password_confirmation: ""
  });

  const handleInput = e => {
    setInput({
      ...input,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.toggleModal(e);
    console.log("handleInput");
    dispatch(ACTION_SIGN_UP(input));
  };

  return (
    <div className="Auths flex center">
      <div className="modal flex center column">
        <h1 className="m-0">Sign up</h1>
        <button className="close" onClick={props.toggleModal}>
          <FontAwesomeIcon icon={["fa", "window-close"]} />
        </button>

        <form onSubmit={handleSubmit}>
          <div className="input-wrapper flex y-center">
            <FontAwesomeIcon className="icon-input" icon={["fa", "user"]} />
            <input
              id="fullname"
              value={input.fullname}
              onChange={handleInput}
              type="text"
              placeholder="Input Your Username..."
              className="input"
              required
            />
          </div>
          <div className="input-wrapper flex y-center">
            <FontAwesomeIcon className="icon-input" icon={["fa", "envelope"]} />
            <input
              id="email"
              value={input.email}
              onChange={handleInput}
              type="email"
              placeholder="Input Your Email..."
              className="input"
              required
            />
          </div>
          <div className="input-wrapper flex y-center">
            <FontAwesomeIcon className="icon-input" icon={["fa", "key"]} />
            <input
              id="password"
              value={input.password}
              onChange={handleInput}
              type="password"
              placeholder="Input Your Password..."
              className="input"
              required
            />
          </div>
          <div className="input-wrapper flex y-center">
            <FontAwesomeIcon className="icon-input" icon={["fa", "key"]} />
            <input
              id="password_confirmation"
              value={input.password_confirmation}
              onChange={handleInput}
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
