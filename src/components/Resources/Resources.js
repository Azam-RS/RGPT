import React from "react";
import Link from "@docusaurus/Link";
import "./resources.css";

const Resources = () => {
    return (
        <div id="resources" className="res-sec">
            <div className="container">
                <div className="row">
                    <div className="col col--12">
                        <div className="g-holder">
                            <div className="row">
                                <div className="col col--6 text--center">
                                    <div className="chat-bg">
                                        <img src="img/chat.png" alt="img" />
                                    </div>
                                </div>
                                <div className="col col--6">
                                    <div className="txt-box">
                                        <h2>
                                            Begin your HDL co-design adventure with the premier design tool.
                                        </h2>
                                        <div className="logo-holder">
                                            {/* <img src="img/logo-white.png" alt="logo" /> */}
                                        </div>
                                        <div>
                                            <Link
                                                className="button  button--lg btn-g"
                                                to="https://getrapidgpt.primis.ai"
                                            >
                                                Sign up Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="outer_circle">
                                    <div className="inner_circle"></div>
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
