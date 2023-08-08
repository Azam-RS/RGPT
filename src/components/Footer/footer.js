import React from "react";
import "./footer.css";
import BackToTopButton from "../../../src/BackToTopButton";
const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="row">
                <div className="col col--12 text--right f-link">
                    <a href="#home" className="footer-logo">
                        <img src="img/RS-white-logo.png" alt="Logo" />
                    </a>
                </div>
                <div className="link-holder"></div>

                <div className="col col--12">
                    <p className="copy-txt">
                        &copy; {new Date().getFullYear()} Rapid Silicon – All Rights Reserved.
                    </p>
                </div>
            </div>
            <BackToTopButton />
        </footer>
    );
};

export default Footer;
