import React from "react";
import Link from "@docusaurus/Link";
import "./resources.css";

const Resources = () => {
    return (
        <div>
            <div id="resources" className="res-sec">
                <div className="container">
                    <div className="row">
                        <div className="col col--12">
                            <div className="contentTags">Resources</div>

                            <div className="row m-top">
                                <div className="col col--6">
                                    <div className="resour-holder">
                                        <h3>UNLOCK THE FULL POTENTIAL OF RAPIDGPT</h3>
                                        <p>
                                            Discover the full potential of RapidGPT with our
                                            comprehensive documentation. Get access to
                                            step-by-step tutorials, time-saving shortcuts, and
                                            troubleshooting tips, enabling a seamless mastery of
                                            RapidGPT.
                                        </p>
                                        <p>
                                            <Link
                                                className="button  button--lg btn-default"
                                                to="/docs"
                                            >
                                                Read the Documentation
                                            </Link>
                                        </p>
                                        <p>
                                            For any issues not mentioned in the documentation, please contact the Rapid Silicon support team via email at:{" "}
                                            <a href="mailto:support@rapidsilicon.com.hs-inbox.com">
                                                support@rapidsilicon.com.hs-inbox.com
                                            </a>
                                        </p>
                                        <p>
                                            Our support team is committed to promptly addressing your concerns and delivering the necessary assistance to ensure a seamless experience with RapidGPT.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resources;
