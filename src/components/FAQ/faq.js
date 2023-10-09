import React from "react";
import TabsArea from "./Tabs";
import "./faq.css";

const FAQ = () => {
    return (
        <div>
            <div id="faqs" className="faq-sec">
                <div className="container">
                    <div className="row">
                        <div className="col col--6 faq-holder">
                            <div className="contentTags">FAQs</div>
                            <TabsArea />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
