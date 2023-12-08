import React from "react";
import ReactDOM from "react-dom";
import "../Chatbox/chatbox.css";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";
const CodeBox = () => {
  return (
    <div className="search-chat">
      
       <span className="cbox animbox"><p className="animateText" style={{visibility:"hidden"}}> I changed my mind. I want the accumulation to happen on 16 bits. </p></span>
     
      <div className="chatbtn">
        <button className="btn btn-primary mt-2 btnsnd">
          <i>
            <img src="/img/sendbtn.svg" alt="icon" />
          </i>
        </button>
      </div>
    </div>
  );
};

export default CodeBox;
