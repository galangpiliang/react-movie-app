import React, { useState } from "react";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Modal Components
import Signin from "./modal/auths/Signin";
import Signup from "./modal/auths/Signup";

function Header() {
  const login = false;
  const [modal, setModal] = useState("");

  const signin = "signin";
  const signup = "signup";

  const toggleModal = e => {
    setModal({
      [e.target.id]: !modal[e.target.id]
    });
  };

  return (
    <div className="Header">
      <div className="container flex y-center wrap">
        <a href="/" className="logo flex y-center">
          <FontAwesomeIcon className="icon-logo" icon={["fab", "youtube"]} />
          <h2 className="text-logo m-half">GalpilTV</h2>
        </a>
        <div className="search-wrapper flex y-center">
          <FontAwesomeIcon className="icon-search" icon={["fa", "search"]} />
          <input type="text" placeholder="Search movie..." className="search" />
        </div>
        {login ? (
          <div className="profile-wrapper">
            <img
              className="profile"
              src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
              alt="profile"
            />
            <div className="dropdown">
              <strong className="username">Galang Piliang</strong>
              <a href="/#">Change Avatar</a>
              <a href="/#">Profile</a>
              <a href="/#">Help</a>
              <a href="/#">Sign out</a>
            </div>
          </div>
        ) : (
          <a id={signin} href="/#" className="ml-1 bold" onClick={toggleModal}>
            Sign in
          </a>
        )}
      </div>
      {modal[signin] ? (
        <Signin toggleModal={toggleModal} signup={signup} />
      ) : (
        false
      )}
      {modal[signup] ? (
        <Signup toggleModal={toggleModal} signin={signin} />
      ) : (
        false
      )}
    </div>
  );
}

export default Header;
