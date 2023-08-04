import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pricing = () => {
  return (
    <div>
      <div id="pricing" className="pri-sec ">
        <div className="container">
          <div className="row ">
            <div className="col col--12">
              <div className="contentTags">Pricing</div>
              <div className="">
                <div className="loginbox plan-box">
                  <div className="">
                    <div className="form-area">
                      <div className="plnfld blubox">
                        <div className="fld-holder blubox">
                          <h1>Free</h1>
                          <p className="eb-txt">Early Bird Subscription</p>
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
                          <div className="form-group text--center">
                            <button
                              type="submit"
                              className="button  button--lg"
                            >
                              Choose Plan
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-area form-disable">
                      <div className="fld-holder plnfld">
                        <h1>
                          {/* <span className="light-blur"> </span> */}
                          <span className="full-blur">$ /month</span>
                        </h1>
                        {/* <h2 style={"color:#c4c3c3"}>Professional</h2> */}
                        <h2 className="full-blur">Professional</h2>
                        <p className="plandesc blur-text">
                          Advanced tools to take your work to the next level.
                        </p>
                        <div className="mb-3 planlist blur-list">
                          <ul>
                            <li>
                              <FontAwesomeIcon icon="check" />
                              <span>Unlimited Questions Zaps</span>
                            </li>
                            <li>
                              <FontAwesomeIcon icon="check" />
                              <span>Unlimited Premium Apps</span>
                            </li>
                            <li>
                              <FontAwesomeIcon icon="check" />
                              <span>50 Users team</span>
                            </li>
                            <li>
                              <FontAwesomeIcon icon="check" />
                              <span>Shared Workspace</span>
                            </li>
                          </ul>
                        </div>
                        <div className="form-group text--center">
                          <button type="submit" className="button  button--lg">
                            Coming Soon
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="form-area form-disable">
                      <div className="fld-holder plnfld">
                        <h1>
                          <span className="full-blur">$ /month</span>
                        </h1>
                        <h2 className="full-blur">Premium</h2>
                        <p className="plandesc blur-text">
                          Automation plus enterprise-grade features.
                        </p>
                        <div className="mb-3 planlist blur-list">
                          <ul>
                            <li>
                              <FontAwesomeIcon icon="check" />
                              <span>Unlimited Questions</span>
                            </li>
                            <li>
                              <FontAwesomeIcon icon="check" />
                              <span>Unlimited Premium</span>
                            </li>
                            <li>
                              <FontAwesomeIcon icon="check" />
                              <span>Unlimited Users team</span>
                            </li>
                            <li>
                              <FontAwesomeIcon icon="check" />
                              <span>Advanced Admin</span>
                            </li>
                            <li>
                              <FontAwesomeIcon icon="check" />
                              <span>Custom Data Retention</span>
                            </li>
                          </ul>
                        </div>
                        <div className="form-group text--center">
                          <button type="submit" className="button  button--lg">
                            Coming Soon
                          </button>
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
