import React from "react";
import "./resources.css";

const Resources = () => {
  return (
    <div>
      <div id="resources" className="res-sec">
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <div className="contentTags">Resources</div>

              <div className="row m-top">
                <div className="col col--6">
                  <div className="resour-holder">
                    <h3>UNLOCK THE FULL POTENTIAL OF RAPIDGPT</h3>
                    <p>
                      Discover the full potential of RapidGPT with our
                      comprehensive User Guide. Download the resource to access
                      step-by-step tutorials, time-saving shortcuts, and
                      troubleshooting tips, enabling a seamless mastery of
                      RapidGPT.
                    </p>
                    <p>
                      <a
                        href="https://customerportal.rapidsilicon.com/hubfs/RapidGPT/RSAPP_VSCode/Latest/RSAPP-Using_RapidGPT_with_VSCode.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="navbar__item navbar__link btn-default"
                      >
                        Download User Guide
                      </a>
                    </p>
                    <p>
                      For issues not disclosed above, get in touch with the
                      Rapid Silicon support team via Email:{" "}
                      <a href="mailto:support@rapidsilicon.com.hs-inbox.com">
                        support@rapidsilicon.com.hs-inbox.com
                      </a>
                    </p>
                    <p>
                      Our support team is dedicated to addressing your concerns
                      and providing the necessary support to ensure a smooth
                      experience with RapidGPT.
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
