/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="row">
        <div>
          <img
            className="logo"
            src="https://codeyourfuture.io/wp-content/uploads/2019/03/cyf_brand.png"
            alt="Code Your Future Logo"
          />
          <h3>Follow Us</h3>
          <ul className="social-icons text-center">
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
            </li>
          </ul>
        </div>
        <div className="text-centre">
          <p className="policy">
            <span>
              {" "}
              &copy; {new Date().getFullYear()} Study Buddies by Hugs4Bugs
            </span>{" "}
            <span className="terms"><a href="/">Terms & Conditions</a></span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
