import React, { useState, useEffect } from "react";
import "./aboutus.css";
const AboutUs = () => {
  return (
    <div>
      <div id="driving-force"></div>
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
                      <h3>
                        PrimisAI: The Driving Force of AI-Powered Hardware
                        Design
                      </h3>
                      <p>
                        PrimisAI is the premier destination for cutting-edge
                        hardware design automation.
                        <br />
                        <br /> Its generative AI solution is the ultimate
                        companion for hardware engineers, featuring advanced
                        Language-to-Code and Language-to-Verification
                        capabilities. PrimisAI’s interactive AI assistant
                        swiftly tackles complex hardware challenges, and covers
                        the entire design stack, from concept to
                        Bitstream/GDSII.
                        <br />
                        <br /> What sets PrimisAI apart is its on-premise
                        deployment capabilities and its easily extendable
                        knowledge base, catering to client-specific IPs,
                        ensuring the customer hardware design experience is
                        unparalleled. With PrimisAI, the future and
                        accessibility of hardware design has no limits.
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
