import React from "react";
import Link from "@docusaurus/Link";
import "./resources.css";

const Resources = () => {
  return (
    <div>
      <div id="resources" className="res-sec">
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <div className="contentTags">Resources</div>

              <div className="row R-top">
                <div className="col col--6">
                  <div className="resour-holder">
                    <h3>UNLOCK THE FULL POTENTIAL OF RAPIDGPT</h3>
                    <p>
                      Discover the full potential of RapidGPT with our
                      comprehensive documentation. Get access to step-by-step
                      tutorials, time-saving shortcuts, and troubleshooting
                      tips.
                    </p>
                    <p>
                      <Link
                        className="button  button--lg btn-default"
                        to="/docs"
                      >
                        Read the Documentation
                      </Link>
                    </p>
                    <p>
                      For any issues, please contact us at:{" "}
                      <a href="mailto:support@primis.ai">support@primis.ai</a>
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

export default Resources;
