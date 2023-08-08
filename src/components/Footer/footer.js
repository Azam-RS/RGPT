import React from "react";
import "./footer.css";
import BackToTopButton from "../../../src/BackToTopButton";
import SocialMedia from "../SocialMedia/socialmedia";
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="row">
        <div className="col col--6">
          <a href="#home" className="footer-logo">
            <img src="img/RS-white-logo.png" alt="Logo" />
          </a>
        </div>
        <div className="col col--6 text--right f-link">
          <SocialMedia />
        </div>
        <div className="col col-12">
          <div className="link-holder"></div>
        </div>

        <div className="col col--12">
          <p className="copy-txt">
            &copy; {new Date().getFullYear()} Rapid Silicon – All Rights
            Reserved.
          </p>
        </div>
      </div>
      <BackToTopButton />
    </footer>
  );
};

export default Footer;
