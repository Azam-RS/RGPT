import React from "react";
import "./footer.css";
import BackToTopButton from "../../../src/BackToTopButton";

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
                    {/* <SocialMedia /> */}
                </div>
                <div className="col col--12">
                    <div className="link-holder"></div>
                </div>

                <div className="col col--6 text--left f-link">
                    <a
                        href="/docs/legal/privacy-policy"
                        className="f-link-item iubenda-white no-brand iubenda-noiframe iubenda-embed iubenda-noiframe iub-body-embed"
                        title="Privacy Policy"
                        target="_blank"
                    >
                        Privacy Policy
                    </a>
                    <a
                        href="/docs/legal/cookie-policy"
                        className="f-link-item iubenda-white no-brand iubenda-noiframe iubenda-embed iubenda-noiframe iub-body-embed"
                        title="Cookie Policy"
                        target="_blank"
                    >
                        Cookie Policy
                    </a>
                    <a
                        href="/docs/legal/terms-and-conditions"
                        className="f-link-item iubenda-white no-brand iubenda-noiframe iubenda-embed iubenda-noiframe iub-body-embed"
                        title="Terms and Conditions"
                        target="_blank"
                    >
                        Terms and Conditions
                    </a>
                    <a
                        href="/docs/legal/user-agreement"
                        className="f-link-item iubenda-white no-brand iubenda-noiframe iubenda-embed iubenda-noiframe iub-body-embed"
                        title="User Agreement"
                        target="_blank"
                    >
                        User Agreement
                    </a>
                </div>

                <div className="col col--6">
                    <p className="copy-txt">
                        &copy; {new Date().getFullYear()} PrimisAI – All Rights Reserved.
                    </p>
                </div>
            </div>
            <BackToTopButton />
        </footer>
    );
};

export default Footer;
