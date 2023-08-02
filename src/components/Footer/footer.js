import React from "react";
import "./footer.css";
import BackToTopButton from "../../../src/BackToTopButton";
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="row">
        <div className="col col--12 m-bottom">
          <a href="#home" className="footer-logo">
            <img src="~/img/RS-white-logo.png" alt="Logo" />
          </a>
        </div>
        <div className="col col--12 text--right f-link">
          <div className="link-holder">
            <a
              href="https://customerportal.rapidsilicon.com/hubfs/RapidGPT/RSAPP_VSCode/Latest/RSAPP-Using_RapidGPT_with_VSCode.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__item navbar__link footer-btn"
            >
              Get RapidGPT
            </a>

            <a href="#home" className="f-link-item">
              Home
            </a>
            <a href="#about" className="f-link-item">
              About
            </a>
            <a href="#features" className="f-link-item">
              Features
            </a>
            {/* <a href="#pricing" className="f-link-item">
              Pricing
            </a> */}
            {/* <a href="#faq" className="f-link-item">
              FAQ
            </a> */}
          </div>
        </div>
        <div className="col col--12">
          <BackToTopButton />
          <p className="copy-txt">
            {new Date().getFullYear()} Rapid Silicon – All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
