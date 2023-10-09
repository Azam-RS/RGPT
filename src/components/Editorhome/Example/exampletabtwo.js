import React from "react";
import Typewriter from "../Typing/typing";
// import ChatBox from "../../Chatbox/chatbox";
import DelayComponent from "../Delay/delay";

const Exampletabtwo = () => {
  return (
    <div>
      <pre className="r-space" id="display">
        <code className="">
          <Typewriter
            text='<span class="cmntTxt"> // Example 2 Implement a simple state machine with two states: IDLE and ACTIVE </span>'
            delay={10}
          />
          <DelayComponent />
        </code>
      </pre>
    </div>
  );
};

export default Exampletabtwo;
