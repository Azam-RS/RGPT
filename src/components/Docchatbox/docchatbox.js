import React from "react";
import "./docchatbox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { faStop } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const DocChatBox = () => {
  return (
    <div className="card chat-area-doc">
      {/*
  <div className="card-header">Chat between User A and User B</div>
  */}
      <div className="card-body">
        <div className="message">
          <div className="userA cbox">
            <p className="icon-holder">
              <i className="userIcon">
                <FontAwesomeIcon icon={faUser} /> User
              </i>
              <i className="trashIcon">
                <FontAwesomeIcon icon={faTrash} />
              </i>
            </p>
            <p>
              i'd like to elaborate a set of functional specifications for a
              system. Can you help me with that?
            </p>
            <p className="datetxt">01/09/2023 00:10:06</p>
          </div>
          <div className="userB cbox">
            <p className="icon-holder">
              <i className="userIcon">
                <FontAwesomeIcon icon={faRobot} /> RapidGPT (4.848 seconds)
              </i>
              <i className="trashIcon">
                <FontAwesomeIcon icon={faTrash} />
              </i>
            </p>
            <p>I'd like to have accumulation ober 32 bits</p>
            <p className="datetxt">01/09/2023 00:10:11</p>
          </div>
          <div className="userA cbox">
            <p className="icon-holder">
              <i className="userIcon">
                <FontAwesomeIcon icon={faUser} /> User
              </i>
              <i className="trashIcon">
                <FontAwesomeIcon icon={faTrash} />
              </i>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quibusdam, molestiae.
            </p>
            <p className="datetxt">01/09/2023 00:18:06</p>
          </div>
          <div className="userB cbox">
            <p className="icon-holder">
              <i className="userIcon">
                <FontAwesomeIcon icon={faRobot} /> RapidGPT (7.848 seconds)
              </i>
              <i className="trashIcon">
                <FontAwesomeIcon icon={faTrash} />
              </i>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, molestiae. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quibusdam, molestiae. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quibusdam, molestiae.
            </p>
            <div className="doccbox">
              <pre>
                <code>
                  <span className="delaytxt">
                    <span className="keywords">module </span>
                    <span className="plain">state_machine</span>
                    <span className="punctuations">(</span> <br />
                    <span className="keywords">input wire</span>
                    <span className="plain"> clk,</span> <br />
                    <span className="keywords">input wire</span>
                    <span className="plain"> reset,</span> <br />
                    <span className="keywords">input wire</span>
                    <span className="plain"> start,</span> <br />
                    <span className="keywords">output reg</span>
                    <span className="plain"> state</span> <br />
                    <span className="punctuations">);</span>
                    <br />
                    <br />
                    <span className="keywords">parameter</span>
                    <span className="plain"> IDLE</span>
                    <span className="keywords">=</span> <span>0</span>
                    <span className="punctuations">;</span>
                    <br />
                    <span className="keywords">parameter</span>
                    <span className="plain"> ACTIVE</span>
                    <span className="keywords">=</span>
                    <span> 1</span>
                    <span className="punctuations">;</span>
                    <br />
                    <span className="plain">always @</span>
                    <span className="punctuations">(</span>
                    <span className="keywords">posedge</span>
                    <span className="plain">clk </span>
                    <span className="keywords">or posedge</span>
                    <span className="plain">
                      {" "}
                      <span className="plain">reset</span>
                      <span className="punctuations">)</span>
                      <br />
                      <span className="keywords"> if </span>
                      <span className="punctuations">(</span>
                      <span className="plain">reset</span>
                      <br />
                      <span className="punctuations">)</span>
                      <br />
                      <span className="plain"> state</span>
                      <span className="keywords">
                        <span>&#60; </span> =
                      </span>
                      <span className="plain">IDLE</span>
                      <span className="punctuations">;</span>
                      <br />
                      <span className="keywords"> else if</span>
                      <span className="punctuations">(</span>
                      <span className="plain">start</span>
                      <span className="punctuations">)</span>
                      <br />
                      <span className="plain"> state</span>
                      <span className="keywords">&#62;=</span>
                      <span className="plain">ACTIVE</span>
                      <span className="punctuations">;</span>
                      <span className="keywords"> else</span>
                      <br />
                      <span className="plain"> state</span>
                      <span className="keywords">&#62;=</span>
                      <span className="plain">state</span>
                      <span className="punctuations">;</span>
                      <span className="keywords">endmodule</span>
                    </span>
                  </span>
                </code>
              </pre>
            </div>
            <p className="datetxt">01/09/2023 00:18:20</p>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <textarea
          className="form-control"
          placeholder="Ask me anything..."
        ></textarea>
        <div className="chatbtn">
          {/* <button className="btn btn-primary mt-2 btnstp">
            <i>
              {" "}
              <FontAwesomeIcon icon={faStop} />
            </i>
          </button> */}
          <button className="btn btn-primary mt-2 btnsnd">
            <i>
              <FontAwesomeIcon icon={faPaperPlane} />
            </i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocChatBox;
