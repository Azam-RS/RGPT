import React, { useState, useEffect } from "react";
import "./aboutus.css";
const AboutUs = () => {
    return (
        <div>
            <div id="ai-driven-eda"></div>
            <div className="line-holder">
                <div className="container">
                    <div className="row">
                        <div className="col col--12">
                            <div className="text--center padding-horiz--md">
                                <div className="row">
                                    <div className="col col--6">
                                        <div className="c-area cht-box primisbg">
                                            <img src="/img/primisbg.png" alt="img" />
                                        </div>
                                    </div>
                                    <div className="col col--6">
                                        <div className="aboutus-holder">
                                            <h3>PrimisAI: Pioneering AI-Driven EDA with RapidGPT</h3>
                                            <p>
                                                PrimisAI is redefining the landscape of AI-driven Electronic Design Automation. Its flagship RapidGPT technology is a game-changer in hardware engineering, pioneering the Language-to-Silicon paradigm. This avant-garde approach empowers engineers to effortlessly translate their innovative visions into tangible designs. At the core of this revolutionary shift is PrimisAI's sophisticated AI assistant, adeptly engineered to master and streamline the complexities of advanced hardware design.
                                                <br /><br />
                                                Our mission transcends traditional design automation. We are committed to revolutionizing the entire design journey, guiding projects from the initial concept through to the final Bitstream/GDSII stages.
                                            </p>

                                        </div>
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

export default AboutUs;
