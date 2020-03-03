import React, { useState } from "react";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Modal Components
import Signin from "./modal/auths/Signin";
import Signup from "./modal/auths/Signup";
import Profile from "./modal/profile";
import Upload from "./modal/profile/upload";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { ACTION_SIGN_OUT } from "../../stores/actions/auth";

function Header() {
  const stateUser = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const [modal, setModal] = useState("");

  const signin = "signin";
  const signup = "signup";
  const profile = "profile";
  const upload = "upload";

  const doSignout = () => {
    console.log("signout triggered");
    dispatch(ACTION_SIGN_OUT());
  };

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
        {stateUser ? (
          <div className="profile-wrapper">
            <img className="profile" src={stateUser.image} alt="profile" />
            <div className="dropdown">
              <strong className="username">{stateUser.fullname}</strong>
              <a id={upload} href="/#" onClick={toggleModal}>
                Change Avatar
              </a>
              <a id={profile} href="/#" onClick={toggleModal}>
                Update Profile
              </a>
              <a href="/#" onClick={doSignout}>
                Sign out
              </a>
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
      {modal[profile] ? <Profile toggleModal={toggleModal} /> : false}
      {modal[upload] ? <Upload toggleModal={toggleModal} /> : false}
    </div>
  );
}

export default Header;
