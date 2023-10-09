import React from "react";
import "./aboutus.css";

const AboutUs = () => {
  return (
    <div>
      <div id="aboutus" className="fea-sec">
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <div className="contentTags">About</div>
              <div className="text--center padding-horiz--md">
                <div className="row m-top">
                  <div className="col col--6">
                    <div className="aboutus-holder">
                      <h3>About PrimisAI</h3>
                      <p>
                        PrimisAI is the premier destination for cutting-edge
                        hardware design automation. Its generative AI solution
                        is the ultimate companion for hardware engineers,
                        featuring advanced Language-to-Code and
                        Language-to-Verification capabilities. PrimisAI’s
                        interactive AI assistant swiftly tackles complex
                        hardware challenges, and covers the entire design stack,
                        from concept to Bitstream/GDSII.
                      </p>
                    </div>
                    <div className="g-box">
                      <p>
                        What sets PrimisAI apart is its on-premise deployment
                        capabilities and its easily extendable knowledge base,
                        catering to client-specific IPs, ensuring the customer
                        hardware design experience is unparalleled. With PrimisAI, the future and accessibility of hardware design has
                        no limits.
                      </p>
                    </div>
                  </div>
                  <div className="col col--6">
                    <div className="brainimg">
                      <video loop autoPlay="autoplay" muted>
                        <source src="/img/brain.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
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
