import React from "react";
const About = () => {
  return (
    <div>
      <div id="features" className="fea-sec">
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <div className="contentTags">Features</div>
              <div className="text--center padding-horiz--md">
                <h2 className="title-txt">
                  RapidGPT is the industry’s first AI-based
                  <br />
                  pair-designer tailored for FPGA engineers.
                </h2>
                <div className="img-holder">
                  <div className="about-img">
                    <img src="img/code.gif" alt="image" />
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

export default About;
