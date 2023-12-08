import React from "react";
import "./pricing.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pricing = () => {
  return (
    <div id="pricing" className="pri-sec">
      <div className="container">
        <div className="row ">
          <div className="col col--9 text--center mx-auto">
            <div className="price-title">
              <h1>Plans & Pricing</h1>
              <p>
                Experience the power of RapidGPT and streamline your hardware
                design process like never before!
              </p>
              <p>
                This powerful tool aims to revolutionize the hardware design
                process by providing contextual suggestions and unparalleled
                language-to-HDL capabilities.
              </p>
            </div>
          </div>
          <div className="col col--12">
            <div className="plan-box">
              <div className="">
                <div className="form-area">
                  <div className="plnfld">
                    <div className="fld-holder">
                      <p className="eb-txt">Free</p>
                      <p className="plandesc fplan">Early Bird Subscription</p>
                      <div className="mb-3 planlist">
                        <ul>
                          <li>
                            <FontAwesomeIcon icon="check" />
                            <span>Unlimited Messages</span>
                          </li>
                          <li>
                            <FontAwesomeIcon icon="check" />
                            <span>Unlimited Projects</span>
                          </li>
                          <li>
                            <FontAwesomeIcon icon="check" />
                            <span>Unlimited Chat Sessions</span>
                          </li>
                        </ul>
                      </div>
                      <div className="elipse-bg"></div>
                      <div className="form-group text--center btnplan">
                        <a
                          href="https://getrapidgpt.primis.ai/User/SignUp"
                          className="button  button--lg"
                        >
                          Choose Plan
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-area">
                  <div className="plnfld">
                    <div className="fld-holder">
                      <p className="eb-txt">PRO</p>
                      <h1>
                        $39 <span className="small-txt"> / month</span>
                      </h1>
                      <p className="plandesc" style={{ visibility: "hidden" }}>
                        Early Bird Subscription
                      </p>
                      <div className="mb-3 planlist">
                        <ul>
                          <li>
                            <FontAwesomeIcon icon="check" />
                            <span>Unlimited Messages</span>
                          </li>
                          <li>
                            <FontAwesomeIcon icon="check" />
                            <span>Unlimited Projects</span>
                          </li>
                          <li>
                            <FontAwesomeIcon icon="check" />
                            <span>Unlimited Chat Sessions</span>
                          </li>
                        </ul>
                      </div>
                      <div className="elipse-bg"></div>

                      <div className="form-group text--center btnplan">
                        <a
                          href="https://getrapidgpt.primis.ai/User/SignUp"
                          className="button  button--lg"
                        >
                          Choose Plan
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-area">
                  <div className="plnfld">
                    <div className="fld-holder">
                      <p className="eb-txt">Corporate</p>
                      <h1>
                        $100 <span className="small-txt"> / month</span>
                      </h1>

                      <p className="plandesc" style={{ visibility: "hidden" }}>
                        Early Bird Subscription
                      </p>
                      <div className="mb-3 planlist">
                        <ul>
                          <li>
                            <FontAwesomeIcon icon="check" />
                            <span>40 Members</span>
                          </li>
                          <li>
                            <FontAwesomeIcon icon="check" />
                            <span>Unlimited Projects</span>
                          </li>
                          <li>
                            <FontAwesomeIcon icon="check" />
                            <span>Unlimited Chat Sessions</span>
                          </li>
                        </ul>
                      </div>
                      <div className="elipse-bg"></div>

                      <div className="form-group text--center btnplan">
                        <a
                          href="https://getrapidgpt.primis.ai/User/SignUp"
                          className="button  button--lg"
                        >
                          Choose Plan
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-area">
                  <div className="plnfld">
                    <div className="fld-holder">
                      <p className="eb-txt">Enterprise</p>
                      <p className="plandesc fplan">
                        For organization
                        <br /> Seeking enterprise
                      </p>
                      <div className="mb-3 planlist">
                        <ul>
                          <li>
                            <FontAwesomeIcon icon="check" />
                            <span>Security</span>
                          </li>
                          <li>
                            <FontAwesomeIcon icon="check" />
                            <span>Enterprise Scale</span>
                          </li>
                          <li>
                            <FontAwesomeIcon icon="check" />
                            <span>Multilevel permissions</span>
                          </li>
                        </ul>
                      </div>
                      <div className="elipse-bg"></div>

                      <div className="form-group text--center btnplan">
                        <a
                          href="https://getrapidgpt.primis.ai/User/SignUp"
                          className="button  button--lg"
                        >
                          Contact Us
                        </a>
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

export default Pricing;
