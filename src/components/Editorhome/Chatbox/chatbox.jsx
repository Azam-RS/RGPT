import React from "react";
import ReactDOM from "react-dom";
import "../Chatbox/chatbox.css";
import Typewriter from "../typewriter";

const ChatBox = () => {
  return (
    <div className="card chat-area">
      <div className="card-body chat-box-body">
        <div className="message">
          <div className="userB hidebox">
            <p className="icon-holder">
              <i className="userIcon">
                <img
                  src="/img/robot.svg"
                  width="20px"
                  height="20px"
                  alt="user"
                />{" "}
                RapidGPT
              </i>
            </p>
            <p>
              I can help you with various tasks related to hardware engineering.
              For example, I can provide you with Verilog code snippets for
              different components or modules, assist you with debugging your
              hardware designs, help you understand and create specifications
              for your designs, and provide guidance on best practices in
              hardware engineering. Let me know what specific assistance you
              need, and I'll be happy to help you!
            </p>
          </div>
          <div className="userA cbox">
            <p className="icon-holder">
              <i className="userIcon">
                <img
                  src="/img/user.svg"
                  width="14px"
                  height="15px"
                  alt="User"
                  className="userChat"
                />
                User
              </i>
              <i className="trashIcon">
                <img
                  src="/img/delete.svg"
                  width="14px"
                  height="15px"
                  alt="delete"
                />
              </i>
            </p>
            <p className="animateText">
              I changed my mind. I want the accumulation to happen on 16 bits.
            </p>
            <p className="datetxt">01/09/2023 00:10:06</p>
          </div>
          <div className="userB cbox">
            <p className="icon-holder">
              <i className="userIcon">
                <img
                  src="/img/robot.svg"
                  width="20px"
                  height="20px"
                  alt="user"
                />{" "}
                RapidGPT (8.334 seconds)
              </i>
              <i className="trashIcon">
                <img
                  src="/img/delete.svg"
                  width="14px"
                  height="15px"
                  alt="delete"
                />
              </i>
            </p>
            <p className="animateText">
              Sure! I can help you modify the code to accommodate a 16-bit
              accumulation. Here's the updated Verilog code for the 16-bit MAC
              with a 32-bit accumulation:
            </p>
            <div className="doccbox">
              <pre className="cbox sm-editor">
                <code>
                  <span className="">
                    <p className="btnchat">
                      <img src="/img/btns.png" alt="icon" />
                    </p>
                    <span className="keywords">
                      <span className="srno">1 </span>module{" "}
                    </span>
                    <span className="plain">mac_16bit_accum_32bit</span>
                    <span className="punctuations"> (</span> <br />
                    <span className="keywords">
                      <span className="srno">2 </span>&nbsp;&nbsp;&nbsp;&nbsp;
                      input wire
                    </span>
                    <span className="plain"> clk,</span> <br />
                    <span className="keywords">
                      <span className="srno">3 </span>&nbsp;&nbsp;&nbsp;&nbsp;
                      input wire
                    </span>
                    <span className="plain"> reset,</span> <br />
                    <span className="keywords">
                      <span className="srno">4 </span>&nbsp;&nbsp;&nbsp;&nbsp;
                      input wire
                    </span>
                    <span className="plain"> [15:0] a,</span> <br />
                    <span className="keywords">
                      <span className="srno">5 </span>&nbsp;&nbsp;&nbsp;&nbsp;
                      input wire
                    </span>
                    <span className="plain"> [15:0] b,</span> <br />
                    <span className="keywords">
                      <span className="srno">6 </span>&nbsp;&nbsp;&nbsp;&nbsp;
                      output{" "}
                    </span>
                    <span className="plain">wire [31:0] accum</span> <br />
                    <span className="punctuations">
                      <span className="srno">7 </span>);
                    </span>
                    <br />
                    <span className="keywords">
                      <span className="srno">8 </span>&nbsp;&nbsp;&nbsp;&nbsp;
                      reg{" "}
                    </span>
                    <span className="plain">[31:0] accum_reg</span>
                    <span className="punctuations">);</span>
                    <br />
                    <span className="srno">9 </span>
                    <br />
                    <span className="plain">
                      <span className="srno">10 </span>&nbsp;&nbsp;&nbsp;&nbsp;
                      always @
                    </span>
                    <span className="punctuations">(</span>
                    <span className="keywords">posedge</span>
                    <span className="plain"> clk </span>
                    <span className="keywords">or posedge</span>{" "}
                    <span className="plain">reset</span>
                    <span className="punctuations">)</span>
                    <span className="plain"> begin</span>
                    <br />
                    <span className="keywords">
                      <span className="srno">11 </span> if{" "}
                    </span>
                    <span className="punctuations">(</span>
                    <span className="plain">reset</span>
                    <span className="punctuations">)</span>
                    <span className="plain"> begin</span>
                    <br />
                    <span className="plain">
                      <span className="srno">12 </span>&nbsp;&nbsp;&nbsp;&nbsp;
                      accum_reg
                    </span>
                    <span className="keywords">
                      <span> &#60;</span>=
                    </span>
                    <span className="plain"> 0</span>
                    <span className="punctuations">;</span>
                    <br />
                    <span className="keywords">
                      <span className="srno">13 </span> end else begin
                    </span>
                    <br />
                    <span className="plain">
                      <span className="srno">14 </span>&nbsp;&nbsp;&nbsp;&nbsp;
                      accum_reg
                    </span>
                    <span className="keywords">
                      <span> &#60;</span>=
                    </span>
                    <span className="plain"> accum_reg</span>
                    <span className="keywords"> + </span>
                    <span className="punctuations">(</span>
                    <span className="plain">a * b</span>
                    <span className="punctuations">)</span>
                    <span className="punctuations">;</span>
                    <br />
                    <span className="keywords">
                      <span className="srno">15 </span> &nbsp;&nbsp;end
                    </span>
                    <br />
                    <span className="keywords">
                      <span className="srno">16 </span> end
                    </span>
                    <br />
                    <span className="keywords">
                      <span className="srno">17 </span> &nbsp;&nbsp;assign{" "}
                    </span>
                    <span className="plain">accum</span>
                    <span className="keywords"> = </span>
                    <span className="plain"> accum_reg</span>
                    <span className="punctuations">;</span>
                    <br />
                    <span className="keywords">
                      <span className="srno">18 </span>endmodule
                    </span>
                  </span>
                </code>
              </pre>
            </div>
            <p className="animateText">
              Please note that I have updated the module name to
              `mac_8bit_accum_16bit` to reflect the change in accumulation
              width. Let me know if you need any further modifications!
            </p>
            <p className="datetxt">01/09/2023 00:44:17</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
