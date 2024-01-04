import React from "react";
import "./pricing.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pricing = () => {
  return (
    <div>
      <div id="pricing" className="plan-pricing"></div>
      <div className="pri-sec">
        <div className="container">
          <div className="row ">
            <div className="col col--9 text--center mx-auto">
              <div className="price-title">
                <h1>Plans & Pricing</h1>
                <p>
                  Experience the power of RapidGPT and streamline your hardware
                  design process like never before!
                </p>
              </div>
            </div>
            <div className="col col--12">
              <div className="plan-box">
                <div className="">
                  <div className="price-holder mx-auto">
                    <div className="form-area">
                      <div className="plnfld">
                        <div className="fld-holder">
                          <p className="eb-txt">Personal</p>
                          <h1>
                            $0 <span className="small-txt"> / month</span>
                          </h1>
                          <p
                            className="plandesc"
                            style={{ visibility: "hidden" }}
                          >
                            Early Bird Subscription
                          </p>
                          <div className="mb-3 planlist">
                            <ul>
                              <li>
                                <span className="iconchk">
                                  <FontAwesomeIcon icon="check" />
                                </span>
                                <span className="plan-d">
                                  Unlimited Messages
                                </span>
                              </li>
                              <li>
                                <span className="iconchk">
                                  <FontAwesomeIcon icon="check" />
                                </span>
                                <span className="plan-d">
                                  Unlimited Projects
                                </span>
                              </li>
                              <li>
                                <span className="iconchk">
                                  <FontAwesomeIcon icon="check" />
                                </span>
                                <span className="plan-d">
                                  Unlimited Chat Sessions
                                </span>
                              </li>
                              <li>
                                <span className="iconchk">
                                  <FontAwesomeIcon icon="check" />
                                </span>
                                <span className="plan-d f-bold">
                                  Free Forever
                                </span>
                              </li>
                            </ul>
                          </div>

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
                    <div className="form-area up-plan">
                      <div className="plnfld">
                        <div className="fld-holder">
                          <p className="eb-txt">
                            PRO <span className="badgetxt">Beta</span>
                          </p>
                          <h1>
                            $69.99{" "}
                            <span className="small-txt"> / month / user</span>
                          </h1>
                          <p className="plandesc stxt mb-0 f-bold">
                            * 15% off for annual subscriptions
                          </p>
                          <p className="plandesc stxt">
                            Everything in Personal, plus:
                          </p>
                          <div className="mb-3 planlist">
                            <ul className="prolist">
                              <li>
                                <span className="iconchk">
                                  <FontAwesomeIcon icon="check" />
                                </span>
                                <span className="plan-d">
                                  More accurate answers
                                </span>
                              </li>
                              <li>
                                <span className="iconchk">
                                  <FontAwesomeIcon icon="check" />
                                </span>
                                <span className="plan-d">
                                  Vendor-specific soft IPs and documentation
                                  support
                                </span>
                              </li>
                              <li>
                                <span className="iconchk">
                                  <FontAwesomeIcon icon="check" />
                                </span>
                                <span className="plan-d">
                                  AutoCheck™: AI-based syntax check
                                </span>
                              </li>

                              <li>
                                <span className="iconchk">
                                  <FontAwesomeIcon icon="check" />
                                </span>
                                <span className="plan-d">
                                  AutoFix™: AI-based syntax autocorrection
                                </span>
                              </li>

                              <li>
                                <span className="iconchk">
                                  <FontAwesomeIcon icon="check" />
                                </span>
                                <span className="plan-d">AutoDoc™</span>
                              </li>

                              <li>
                                <span className="iconchk">
                                  <FontAwesomeIcon icon="check" />
                                </span>
                                <span className="plan-d">
                                  Priority access to new features
                                  and improvements
                                </span>
                              </li>
                              <li>
                                <span className="iconchk">
                                  <FontAwesomeIcon icon="check" />
                                </span>
                                <span className="plan-d">Priority support</span>
                              </li>
                            </ul>
                          </div>

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
                    <div className="form-area up-plan d-none">
                      <div className="plnfld">
                        <div className="fld-holder">
                          <p className="eb-txt">Corporate /Team </p>
                          <h1>
                            <span className="small-txt"> Coming Soon</span>
                          </h1>
                          <p className="plandesc stxt mb-0 f-bold blurtxt">
                            * 15% off for annual subscriptions
                          </p>
                          <p className="plandesc stxt blurtxt">
                            Everything in Personal, plus:
                          </p>
                          <div className="mb-3 planlist blurtxt">
                            <ul className="prolist">
                              <li>
                                <span className="iconchk">
                                  <FontAwesomeIcon icon="check" />
                                </span>
                                <span className="plan-d">
                                  More accurate answers
                                </span>
                              </li>
                              <li>
                                <span className="iconchk">
                                  <FontAwesomeIcon icon="check" />
                                </span>
                                <span className="plan-d">
                                  Vendor-specific soft IPs and documentation
                                  support
                                </span>
                              </li>
                              <li>
                                <span className="iconchk">
                                  <FontAwesomeIcon icon="check" />
                                </span>
                                <span className="plan-d">
                                  AutoCheck™: AI-based syntax check
                                </span>
                              </li>

                              <li>
                                <span className="iconchk">
                                  <FontAwesomeIcon icon="check" />
                                </span>
                                <span className="plan-d">
                                  AutoFix™: AI-based syntax autocorrection
                                </span>
                              </li>

                              <li>
                                <span className="iconchk">
                                  <FontAwesomeIcon icon="check" />
                                </span>
                                <span className="plan-d">AutoDoc™</span>
                              </li>

                              <li>
                                <span className="iconchk">
                                  <FontAwesomeIcon icon="check" />
                                </span>
                                <span className="plan-d">
                                  Priority access to new features
                                  and improvements
                                </span>
                              </li>
                              <li>
                                <span className="iconchk">
                                  <FontAwesomeIcon icon="check" />
                                </span>
                                <span className="plan-d">Priority support</span>
                              </li>
                            </ul>
                          </div>

                          <div className="form-group text--center btnplan blurtxt">
                            <a href="#" className="button  button--lg cp-dis">
                              Contact Us
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
                            Secure, Private, and Self-Contained
                          </p>
                          <div className="mb-3 planlist">
                            <ul>
                              <li>
                                <span className="iconchk">
                                  <FontAwesomeIcon icon="check" />
                                </span>
                                <span className="plan-d">
                                  Deployment on-premises
                                </span>
                              </li>
                              <li>
                                <span className="iconchk">
                                  <FontAwesomeIcon icon="check" />
                                </span>
                                <span className="plan-d">
                                  Dedicated technical support
                                </span>
                              </li>
                              <li>
                                <span className="iconchk">
                                  <FontAwesomeIcon icon="check" />
                                </span>
                                <span className="plan-d">
                                  Customized AI training
                                </span>
                              </li>
                            </ul>
                          </div>

                          <div className="form-group text--center btnplan">
                            <a
                              href="mailto:info@primis.ai"
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
      </div>
    </div>
  );
};

export default Pricing;
