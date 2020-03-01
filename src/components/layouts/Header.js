import React from "react";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function header() {
  const login = true;

  return (
    <div className="Header">
      <div className="container flex y-center wrap">
        <a href="/" className="logo flex y-center">
          <FontAwesomeIcon className="icon-logo" icon={["fab", "youtube"]} />
          <h2 className="text-logo m-half">GalpilTV</h2>
        </a>
        <div className="search-wrapper">
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
              <a href="/#">Profile</a>
              <a href="/#">Settings</a>
              <a href="/#">Help</a>
              <a href="/#">Sign out</a>
            </div>
          </div>
        ) : (
          <a href="/#" className="ml-1">
            <strong> Sign in </strong>
          </a>
        )}
      </div>
    </div>
  );
}
