import React, { useState } from "react";
import { ReactDOM } from "react";
// import React, { useState } from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import "../Editorhome/editorhome.css";
import Exampletabone from "./Example/exampletabone";
import Exampletabtwo from "./Example/exampletabtwo";
// import ChatBox from "./Chatbox/chatbox";

const EditorHome = () => {
  const [refreshed, setRefreshed] = useState(true);

  const handleRefreshClick = () => {
    document.getElementById("display").innerHTML = "";
    setRefreshed(!refreshed);
    setTimeout(() => {
      setRefreshed(refreshed);
    }, 10);
  };

  return (
    <div>
      <div id="features" className="fea-sec bg-editor">
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
                <div className="img-holder ed-tab">
                  {/* <div className="about-img">
                    <img src="img/code.gif" alt="image" />
                  </div> */}
                  <button
                    type="button"
                    onClick={handleRefreshClick}
                    className="btn-reply"
                  >
                    Replay
                  </button>
                  <Tabs>
                    <TabItem
                      value="Tab 1"
                      label="Tab 1"
                      default
                      className="accord-holder"
                    >
                      {refreshed && <Exampletabone />}
                    </TabItem>

                    <TabItem
                      value="Tab 2"
                      label="Tab 2"
                      className="accord-holder"
                    >
                      {refreshed && <Exampletabtwo />}
                    </TabItem>
                    {/* <TabItem
                      value="Tab 3"
                      label="Tab 3"
                      className="accord-holder"
                    >
                      {refreshed && <ChatBox />}
                    </TabItem> */}
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorHome;
