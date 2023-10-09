import React from "react";
import "./vision.css";

const Vision = () => {
  return (
    <div>
      <div id="vision" className="fea-sec">
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <div className="contentTags">Vision</div>
              <div className="text--center padding-horiz--md">
                <div className="row m-top">
                  <div className="col col--12">
                    <div className="vision-holder">
                      <h1>
                        Empowering <span className="seagreen">Innovation</span>{" "}
                        through Cutting-Edge{" "}
                        <span className="seagreen">Generative AI</span> in
                        Hardware Design
                      </h1>
                    </div>
                  </div>
                  <div className="col col--12">
                    <div className="">
                      <img src="/img/logo-brain.png" alt="vision" width={147} />
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

export default Vision;
