import React, { useState, useEffect } from "react";
import { ReactDOM } from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import "../Editorhome/editorhome.css";
import ChatBox from "./Chatbox/chatbox";
import EditorBox from "./Chatbox/editorbox";
import CodeBox from "./Chatbox/codebox";
import Typewriter from "./typewriter";

const Exampletabone = () => {
  return (
    <div>
      <div>
        <pre className="r-space" id="displayTab1">
          <code className="">
            <Typewriter text='<span class="cmntTxt"><span class="srno">1 </span> /* A simple 8-bit MAC with accumulation over 32 bits */ </span>' />
            <div className="delaytxt">
              <span className="delaytxt">
                <span className="keywords">
                  <span className="srno">2 </span>&nbsp;module{" "}
                </span>
                <span className="plain">mac_8bit_accum_32bit</span>
                <span className="punctuations"> (</span> <br />
                <span className="keywords">
                  <span className="srno">3 </span>&nbsp;&nbsp;&nbsp;&nbsp;input
                  wire
                </span>
                <span className="plain"> clk,</span> <br />
                <span className="keywords">
                  <span className="srno">4 </span>&nbsp;&nbsp;&nbsp;&nbsp;input
                  wire
                </span>
                <span className="plain"> reset,</span> <br />
                <span className="keywords">
                  <span className="srno">5 </span>&nbsp;&nbsp;&nbsp;&nbsp;input
                  wire
                </span>
                <span className="plain"> [7:0] a,</span> <br />
                <span className="keywords">
                  <span className="srno">6 </span>&nbsp;&nbsp;&nbsp;&nbsp;input
                  wire
                </span>
                <span className="plain"> [7:0] b,</span> <br />
                <span className="keywords">
                  <span className="srno">8 </span>&nbsp;&nbsp;&nbsp;&nbsp;output{" "}
                </span>
                <span className="plain">wire [31:0] accum</span> <br />
                <span className="punctuations">
                  <span className="srno">9 </span>);
                </span>
                <br />
                <span className="keywords">
                  <span className="srno">10 </span>&nbsp;&nbsp;&nbsp;&nbsp;reg{" "}
                </span>
                <span className="plain">[31:0] accum_reg</span>
                <span className="punctuations">&nbsp;&nbsp;);</span>
                <br />
                <span className="srno">11 </span>
                <br />
                <span className="plain">
                  <span className="srno">12 </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;always @
                </span>
                <span className="punctuations">(</span>
                <span className="keywords">posedge</span>
                <span className="plain"> clk </span>
                <span className="keywords">or posedge</span>{" "}
                <span className="plain">reset</span>
                <span className="punctuations">)</span>
                <span className="plain"> begin</span>
                <br />
                <span className="srno">13 </span>
                <span className="keywords">&nbsp;&nbsp;&nbsp;&nbsp; if </span>
                <span className="punctuations">(</span>
                <span className="plain">reset</span>
                <span className="punctuations">)</span>
                <span className="plain"> begin</span>
                <br />
                <span className="srno">14 </span>
                <span className="plain">
                  {" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;accum_reg
                </span>
                <span className="keywords">
                  <span> &#60;</span>=
                </span>
                <span className="plain"> 0</span>
                <span className="punctuations">;</span>
                <br />
                <span className="srno">15 </span>
                <span className="keywords">
                  &nbsp;&nbsp;&nbsp;&nbsp; end else begin
                </span>
                <br />
                <span className="srno">16 </span>
                <span className="plain">
                  {" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;accum_reg
                </span>
                <span className="keywords">
                  <span> &#60;</span>=
                </span>
                <span className="plain">
                  &nbsp;&nbsp;&nbsp;&nbsp; accum_reg
                </span>
                <span className="keywords"> + </span>
                <span className="punctuations">(</span>
                <span className="plain">a * b</span>
                <span className="punctuations">)</span>
                <span className="punctuations">;</span>
                <br />
                <span className="keywords">
                  <span className="srno">17 </span> &nbsp;&nbsp; end
                </span>
                <br />
                <span className="keywords">
                  <span className="srno">18 </span> end
                </span>
                <br />
                <span className="keywords">
                  <span className="srno">19 </span>{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;assign{" "}
                </span>
                <span className="plain">accum</span>
                <span className="keywords"> = </span>
                <span className="plain"> accum_reg</span>
                <span className="punctuations">;</span>
                <br />
                <span className="keywords">
                  <span className="srno">20 </span>endmodule
                </span>
              </span>
            </div>
          </code>
        </pre>
      </div>
    </div>
  );
};

const Exampletabtwo = () => {
  return (
    <div>
      <pre className="r-space" id="displayTab2">
        <code className="">
          <Typewriter text='<span class="cmntTxt"><span className="srno">1 </span>  /* A Verilog module to blink LED at 50 KHz */ </span> ' />
          <div className="delaytxt">
            <span className="delaytxt">
              <span className="keywords">
                <span className="srno">2 </span>&nbsp;module{" "}
              </span>
              <span className="plain">LED_Blinker</span>
              <span className="punctuations">(</span> <br />
              <span className="keywords">
                <span className="srno">3 </span>&nbsp;&nbsp;&nbsp;&nbsp;input
                wire
              </span>
              <span className="plain"> clk,</span> &nbsp; &nbsp;{" "}
              <span className="cmntsub"> // Clock Input </span> <br />
              <span className="keywords">
                <span className="srno">4 </span>&nbsp;&nbsp;&nbsp;&nbsp;output
                reg
              </span>
              <span className="plain"> led</span> &nbsp; &nbsp;
              <span className="cmntsub"> // LED output </span>
              <br />
              <span className="punctuations">
                <span className="srno">5 </span>&nbsp;
              </span>
              );
              <br />
              <span className="cmntsub">
                <span className="srno">6 </span> // Define a counter for
                dividing the clock frequency
              </span>
              <br />
              <span className="keywords">
                <span className="srno">7 </span>&nbsp;&nbsp;&nbsp;&nbsp;reg
              </span>
              <span className="plain"> [23:0] counter;</span>
              <br />
              <span className="cmntsub">
                <span className="srno">8 </span> // Parameter for the desired
                blinking frequency
              </span>
              <br />
              <span className="keywords">
                <span className="srno">9 </span>
                &nbsp;&nbsp;&nbsp;&nbsp;parameter
              </span>
              <span className="plain"> BLINK_FREQ</span>
              <span className="keywords">=</span> <span>=</span>
              <span className="plain"> 50000</span>
              <span className="punctuations">;</span>
              <span className="cmntsub"> // 50 kHz</span>
              <br />
              <span className="cmntsub">
                <span className="srno">10 </span>// Always block to toggle the
                LED based on the counter
              </span>
              <br />
              <span className="srno">11 </span>
              <br />
              <span className="plain">
                <span className="srno">12 </span>always @
              </span>
              <span className="punctuations">(</span>
              <span className="keywords">posedge</span>
              <span className="plain"> clk </span>
              <span className="punctuations">)</span>
              <span className="keywords">begin</span>
              <br />
              <span className="keywords">
                <span className="srno">13 </span>if{" "}
              </span>
              <span className="punctuations">(</span>
              <span className="plain">counter</span>
              <span className="keywords"> == </span>
              <span className="punctuations">(</span>
              <span className="plain"> BLINK_FREQ </span>
              <span className="punctuations">/</span>
              <span className="plain"> 2 </span>
              <span className="punctuations">)</span>
              <span className="punctuations"> - </span>
              <span className="plain"> 1 </span>
              <span className="punctuations">)</span>
              <span className="plain"> begin</span>
              <br />
              <span className="keywords">
                <span className="srno">14 </span>&nbsp;&nbsp;&nbsp;&nbsp; led{" "}
              </span>
              <span className="keywords">
                <span>&#60; </span> =
              </span>
              <span className="keywords"> ~led </span>
              <span className="punctuations">;</span>
              <span className="cmntsub">
                {" "}
                // Toggle the LED every half period
              </span>
              <br />
              <span className="keywords">
                <span className="srno">15 </span>&nbsp;&nbsp;&nbsp;&nbsp;
                counter{" "}
              </span>
              <span className="keywords">
                <span>&#60; </span> =
              </span>
              <span className="keywords"> 0 </span>
              <span className="punctuations">;</span>
              <span className="cmntsub"> // Reset the counter</span>
              <br />
              <span className="keywords">
                <span className="srno">16 </span>end
              </span>
              <span className="plain"> else </span>
              <span className="plain"> begin</span>
              <br />
              <span className="keywords">
                <span className="srno">17 </span>&nbsp;&nbsp;&nbsp;&nbsp;
                counter{" "}
              </span>
              <span className="keywords">
                <span>&#60; </span> =
              </span>
              <span className="keywords"> counter </span>
              <span className="punctuations">+</span>
              <span className="keywords"> 1 </span>
              <span className="cmntsub"> // Increment the counter</span>
              <br />
              <span className="keywords">
                <span className="srno">18 </span>&nbsp;&nbsp;&nbsp; end
              </span>
              <br />
              <span className="keywords">
                <span className="srno">19 </span>end
              </span>
              <br />
              <span className="keywords">
                <span className="srno">20 </span>endmodule
              </span>
            </span>
          </div>
        </code>
      </pre>
    </div>
  );
};

const Exampletabthree = () => {
  return (
    <div>
      <div className="row">
        <div className="col col--4">
          <div id="displayTab3box2">
            <ChatBox />
          </div>
          <div id="displayTab3box1">
            <CodeBox />
          </div>
        </div>
        <div className="col col--8" id="displayTab3box3">
          <EditorBox />
        </div>
      </div>
    </div>
  );
};

const EditorHome = () => {
  const [refreshed, setRefreshed] = useState(true);
  const [initialContent, setInitialContent] = useState("");

  const handleRefreshClick = () => {
    var edTabContainer = document.querySelector(".ed-tab");

    if (edTabContainer) {
      var activeTab = edTabContainer.querySelector(".tabs__item--active");
      if (activeTab.textContent.trim() == "Chat") {
        setRefreshed(!refreshed);
        setTimeout(() => {
          setRefreshed(refreshed);

          var editor2 = document.getElementById("displayTab3box2");
          var editor1 = document.getElementById("displayTab3box1");
          var editor2childElements = editor2.querySelectorAll(".cbox");
          var editor2childElement2 = editor2.querySelectorAll(".hidebox");
          var editor1childElements = editor1.querySelectorAll(".animateText");

          editor1childElements.forEach((editor1childElement) => {
            editor1childElement.style.visibility = "hidden";
          });
          editor2childElements.forEach((editor2childElement) => {
            editor2childElement.style.display = "none";
          });
          editor2childElement2.forEach((editor2childElement2) => {
            editor2childElement2.style.display = "block";
          });

          setTimeout(() => {
            editor2childElement2.forEach((editor2childElement2) => {
              editor2childElement2.style.display = "none";
            });
            editor1childElements.forEach((editor1childElement) => {
              editor1childElement.style.visibility = "visible";
            });
            chatDoc("displayTab3box1");

            setTimeout(() => {
              editor1childElements.forEach((editor1childElement) => {
                editor1childElement.style.visibility = "hidden";
              });
              chatDoc("displayTab3box2");
            }, 2000);
          }, 3000);
        }, 10);
      } else {
        setRefreshed(!refreshed);
        setTimeout(() => {
          setRefreshed(refreshed);
        }, 10);
      }
      // In condition "Tab 3" right side is must be a text of Tab 3
    }
  };

  return (
    <div className="editor-holder">
      <div id="features" className="bg-editor">
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <div className="text--center padding-horiz--md">
                <div className="img-holder ed-tab">
                  <button
                    type="button"
                    onClick={() => handleRefreshClick()}
                    className="btn-reply rewrite"
                  >
                    Replay
                  </button>
                  <Tabs>
                    <TabItem
                      value="8-bit Mac"
                      label="8-bit Mac"
                      default
                      className="accord-holder"
                    >
                      {refreshed && <Exampletabone />}
                    </TabItem>

                    <TabItem
                      value="Blink LED"
                      label="Blink LED"
                      className="accord-holder"
                    >
                      {refreshed && <Exampletabtwo />}
                    </TabItem>
                    <TabItem
                      value="Chat"
                      label="Chat"
                      className="accord-holder"
                    >
                      {refreshed && <Exampletabthree />}
                    </TabItem>
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
