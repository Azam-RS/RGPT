import React from "react";
import TabsArea from "./Tabs";
import "./faq.css";

const FAQ = () => {
    return (
        <div>
            <div id="faq" className="faq-sec">
                <div className="container">
                    <div className="row">
                        <div className="col col--6 faq-holder">
                            <div className="contentTags">FAQs</div>
                            <TabsArea />
                            {/* <p>
                                <a href="/RGPT/docs/support" className="faq-link">
                                    Whast is RapidGPT Question 1 ?
                                </a>
                            </p>
                            <p>
                                <a href="/RGPT/docs/support" className="faq-link">
                                    Whast is RapidGPT Question 2 ?
                                </a>
                            </p>
                            <p>
                                <a href="/RGPT/docs/support" className="faq-link">
                                    Whast is RapidGPT Question 3 ?
                                </a>
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
