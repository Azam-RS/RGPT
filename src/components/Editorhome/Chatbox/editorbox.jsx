import React from "react";
import ReactDOM from "react-dom";
import "../Chatbox/chatbox.css";
import Typewriter from "../typewriter";

const EditorBox = () => {
  return (
    <div className="cod-box">
      <pre className="cbox">
        <code>
          <Typewriter text='<span class="cmntTxt"><span className="srno">1 </span> /* Declare internal state variables */ </span> ' />
          <span className="delaytxt">
            <span className="keywords">
              <span className="srno">2 </span>module{" "}
            </span>
            <span className="plain">mac_8bit_accum_32bit</span>
            <span className="punctuations"> (</span> <br />
            <span className="keywords">
              <span className="srno">3 </span>&nbsp;&nbsp;&nbsp;&nbsp;input wire
            </span>
            <span className="plain"> clk,</span> <br />
            <span className="keywords">
              <span className="srno">4 </span>&nbsp;&nbsp;&nbsp;&nbsp;input wire
            </span>
            <span className="plain"> reset,</span> <br />
            <span className="keywords">
              <span className="srno">5 </span>&nbsp;&nbsp;&nbsp;&nbsp;input wire
            </span>
            <span className="plain"> [7:0] a,</span> <br />
            <span className="keywords">
              <span className="srno">6 </span>&nbsp;&nbsp;&nbsp;&nbsp;input wire
            </span>
            <span className="plain"> [7:0] b,</span> <br />
            <span className="keywords">
              <span className="srno">7 </span>&nbsp;&nbsp;&nbsp;&nbsp;output{" "}
            </span>
            <span className="plain">wire [31:0] accum</span> <br />
            <span className="punctuations">
              <span className="srno">8 </span>);
            </span>
            <br />
            <span className="keywords">
              <span className="srno">9 </span>&nbsp;&nbsp;&nbsp;&nbsp;reg{" "}
            </span>
            <span className="plain">[31:0] accum_reg</span>
            <span className="punctuations">);</span>
            <br />
            <span className="srno">10 </span>
            <br />
            <span className="plain">
              <span className="srno">11 </span>&nbsp;&nbsp;&nbsp;&nbsp;always @
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
              <span className="srno">12 </span>if
            </span>
            <span className="punctuations">(</span>
            <span className="plain">reset</span>
            <span className="punctuations">)</span>
            <span className="plain"> begin</span>
            <br />
            <span className="plain">
              <span className="srno">13 </span>&nbsp;&nbsp;&nbsp;&nbsp;
              accum_reg
            </span>
            <span className="keywords">
              <span> &#60;</span>=
            </span>
            <span className="plain"> 0</span>
            <span className="punctuations">;</span>
            <br />
            <span className="keywords">
              <span className="srno">14 </span>end else begin
            </span>
            <br />
            <span className="plain">
              <span className="srno">15 </span>&nbsp;&nbsp;&nbsp;&nbsp;
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
              <span className="srno">16 </span>&nbsp;&nbsp;end
            </span>
            <br />
            <span className="keywords">
              <span className="srno">17 </span>end
            </span>
            <br />
            <span className="keywords">
              <span className="srno">18 </span>&nbsp;&nbsp;&nbsp;&nbsp; assign{" "}
            </span>
            <span className="plain">accum</span>
            <span className="keywords"> = </span>
            <span className="plain"> accum_reg</span>
            <span className="punctuations">;</span>
            <br />
            <span className="keywords">
              <span className="srno">19 </span>endmodule
            </span>
          </span>
        </code>
      </pre>
    </div>
  );
};

export default EditorBox;
