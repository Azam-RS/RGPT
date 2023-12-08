import React, { useState, useEffect } from "react";
import "./feature.css";

const Features = () => {
  const [currentDiv, setCurrentDiv] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentDiv((prevDiv) => (prevDiv % 4) + 1);
      }, 4000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isHovered]);

  return (
    <div>
      <div className="gif-sec">
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <div
                className="feature-holder"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                  setIsHovered(false);
                }}
              >
                <h3>
                  RapidGPT provides you with the{" "}
                  <span className="nline"> corresponding code</span>
                </h3>
                <div className="desc-feat">
                  <div className="row">
                    <div className="col col--8">
                      {currentDiv === 1 && (
                        <div id="Div1" className={`section`}>
                          <h4>Intelligent Code Assistant</h4>
                          <p>
                            RapidGPT leverages AI algorithms to provide accurate
                            and context-aware code suggestions, allowing FPGA
                            engineers to write Verilog code more efficiently.
                            RapidGPT understands your intent and converts it
                            into complete HDL code. Simply write a comment or
                            describe your desired functionality, and RapidGPT
                            will provide you with the corresponding code. Just
                            focus on expressing your design intent, and RapidGPT
                            will take care of the rest.
                          </p>
                        </div>
                      )}

                      {currentDiv === 2 && (
                        <div id="Div2" className={`section`}>
                          <h4>Conversational Capabilities</h4>
                          <p>
                            RapidGPT takes conversational capabilities to the
                            next level by offering a chat panel that allows
                            users to easily communicate with the tool. This chat
                            panel can be used to write or improve HDL code in a
                            conversational manner. Whether you need assistance
                            with a specific design element or want to explore
                            different design options, RapidGPT is here to help.
                          </p>
                        </div>
                      )}
                      {currentDiv === 3 && (
                        <div id="Div3" className={`section`}>
                          <h4>Contextual Suggestions</h4>
                          <p>
                            With RapidGPT, you receive intelligent and
                            context-aware suggestions as you write your code.
                            The tool analyzes your code snippet and provides you
                            with helpful suggestions for completing your code or
                            optimizing your design. The suggestions take into
                            account your specific design requirements and
                            industry best practices, ensuring that you create
                            high-quality, efficient hardware designs.
                          </p>
                        </div>
                      )}

                      {currentDiv === 4 && (
                        <div id="Div4" className={`section`}>
                          <h4>Code Optimization</h4>
                          <p>
                            RapidGPT detects potential errors and
                            inconsistencies in your code, helping you catch and
                            fix issues early in the design process.
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="col col--4 text--right">
                      <div className="bg-icon">
                        <div className="bg-p">
                          {currentDiv === 1 && (
                            <div>
                              <div className={`imgDiv`}></div>
                              <div className="image1"></div>
                            </div>
                          )}
                          {currentDiv === 2 && (
                            <div>
                              <div className={`imgDiv2`}></div>
                              <div className="image2"></div>
                            </div>
                          )}
                          {currentDiv === 3 && (
                            <div>
                              <div className={`imgDiv3`}></div>
                              <div className="image3"></div>
                            </div>
                          )}
                          {currentDiv === 4 && (
                            <div>
                              <div className={`imgDiv4`}></div>
                              <div className="image4"></div>
                            </div>
                          )}
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

export default Features;
