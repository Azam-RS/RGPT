import React from "react";
import "./feature.css";

const Features = () => {
  return (
    <div>
      <div id="features" className="fea-sec">
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <div className="contentTags">Features</div>

              <div className="row m-top">
                <div className="col col--6">
                  <div className="feature-holder">
                    <h3>EMPOWERING HARDWARE DESIGNERS</h3>
                    <p>
                      RapidGPT provides a natural language interface that
                      empowers hardware designers to interact with hardware
                      description language (HDL) in a more intuitive and
                      efficient way. RapidGPT understands the intent of
                      designers’ commands and provides relevant suggestions,
                      eliminating the need for exhaustive searches for syntax,
                      semantics, and documentation. Our tool’s intelligent code
                      autocompletion feature provides contextual suggestions
                      based on your code, removing errors, and streamlining the
                      code writing process.
                    </p>
                  </div>
                </div>
                <div className="col col--6">
                  <div className="feature-holder">
                    <h3>Increase productivity by 5x</h3>
                    <p>
                      Our AI-based approach leverages advanced natural language
                      processing to enable code autocompletion, and
                      conversational features, enabling FPGA designers to work
                      more effectively and efficiently than ever before. With
                      RapidGPT, designers can focus on their expertise and
                      create ground-breaking designs that transform industries.
                    </p>
                  </div>
                </div>
                <div className="col col--6">
                  <div className="feature-holder">
                    <h3>UNLEASH THE POWER OF RAPIDGPT TODAY</h3>
                    <p>
                      RapidGPT is the ultimate HDL from the future that empowers
                      FPGA designers to unleash their creativity and design
                      high-quality products faster. By reducing friction in the
                      FPGA design process, RapidGPT allows designers to optimize
                      their solutions and increase their productivity and reduce
                      time-to-market.
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

export default Features;
