import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Footer.scss";

export default function footer() {
  return (
    <div className="Footer">
      <div className="container">
        <div className="links flex wrap between">
          <div className="logo-wrapper">
            <Link to="/" className="logo flex y-center">
              <FontAwesomeIcon
                className="icon-logo"
                icon={["fab", "youtube"]}
              />
              <h2 className="text-logo m-half">GalpilTV</h2>
            </Link>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              exercitationem blanditiis officiis, iste sequi minima dicta
              necessitatibus! Odio ipsa cupiditate et nam consectetur
              aspernatur, molestiae, repellendus vel id unde harum.
            </p>
          </div>
          <div className="flex column link-wrapper">
            <strong className="mb-1">Link</strong>
            <a href="/#">Tentang kami</a>
            <a href="/#">Blog</a>
            <a href="/#">Layanan</a>
            <a href="/#">Karir</a>
            <a href="/#">Pusat Media</a>
          </div>
          <div className="social-wrapper">
            <div className="download">
              <strong>Download</strong>
              <div className="mt-1 mb-1">
                <a
                  href="https://play.google.com/store"
                  className="flex y-center m-1 ml-0"
                >
                  <FontAwesomeIcon
                    className="icon-logo mr-1"
                    icon={["fab", "google-play"]}
                  />
                  <strong>Google Play</strong>
                </a>
                <a
                  href="https://www.apple.com/id/ios/app-store/"
                  className="flex y-center"
                >
                  <FontAwesomeIcon
                    className="icon-logo mr-1"
                    icon={["fab", "app-store-ios"]}
                  />
                  <strong>Play Store</strong>
                </a>
              </div>
            </div>
            <div className="socmed">
              <strong>Social media</strong>
              <div className="mt-1 mb-1">
                <a href="https://www.facebook.com/">
                  <FontAwesomeIcon
                    className="icon-logo"
                    icon={["fab", "facebook-square"]}
                  />
                </a>
                <a href="https://id.pinterest.com/">
                  <FontAwesomeIcon
                    className="icon-logo"
                    icon={["fab", "pinterest-square"]}
                  />
                </a>
                <a href="https://www.instagram.com/">
                  <FontAwesomeIcon
                    className="icon-logo"
                    icon={["fab", "instagram-square"]}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <h4 className="text-center">
          Copyright &copy; 2000-2020 GalpilTV. All Rights Reserved
        </h4>
      </div>
    </div>
  );
}
