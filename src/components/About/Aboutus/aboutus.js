import React, { useState, useEffect } from "react";
import "./aboutushome.css";
import Counter from "./IncrementCounter";
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
                                <div className="col col--7">
                                    <div className="aboutus-holder">
                                        <h3>Pioneering AI-Driven<br/> EDA with RapidGPT</h3>
                                        <p>
                                            PrimisAI revolutionizes AI-driven EDA with RapidGPT, a groundbreaking generative AI-based tool and hardware engineering game-changer. Our innovative solution empowers hardware designers with a natural language interface, enhancing productivity, accelerating time-to-market, and transcending traditional automation.
                                            <br /><br />
                                            RapidGPT offers a more intuitive interaction for the entire design journey, guiding hardware engineers on projects from concept to bitstream/GDSII stages.
                                        </p>
                                    </div>
                                    </div>
                                    <div className="col col--5">
                                        <div className="c-area cht-box primisbg">
                                            <img src="/img/primisbg.png" alt="img" />
                                        </div>
                                    </div>
                                    <div className="col col--12">
                                         <div className="abt-s-holder">
                                            <h1>
                                                Empowering{" "}
                                                <span style={{ color: "rgba(50, 224, 223, 1)" }}>
                                                    Innovation{" "}
                                                </span>
                                                through Cutting-Edge{" "}
                                                Generative AI in{" "}
                                                <span style={{ color: "rgba(50, 224, 223, 1)" }}>
                                                Hardware Design
                                                </span>
                                            </h1>
                                            <div className="statsno">
                                                <div className="intrnc">
                                                <h1><Counter start={1} end={10} duration={2000}  />K&#x2b;</h1>                                                    
                                                    <h2>interactions</h2>
                                                </div>
                                                <div className="tuser">
                                                <p>Trusted by users of</p>
                                                <h1><Counter start={1} end={150} duration={2000}  />&#x2b;</h1>
                                                <h2>Companies</h2>
                                                </div>
                                            </div>
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
