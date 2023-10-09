import React from "react";
import Typewriter from "../Typing/typing";
import DelayComponent from "../Delay/delay";

const Exampletabone = () => {
  return (
    <div>
      <div>
        <pre className="r-space" id="display">
          <code className="">
            <Typewriter
              text='<span class="cmntTxt"> //Implement a simple state machine with two states: IDLE and ACTIVE </span>'
              delay={10}
            />
            <DelayComponent />
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Exampletabone;
