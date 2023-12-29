import React, { useEffect, useState } from "react";
import "../Prism/prism.css";

const ExampleFour = () => {
  const [formattedCode, setFormattedCode] = useState("");
  const isMounted = React.useRef(true);

  useEffect(() => {
    const loadScripts = async () => {
      try {
        await loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/prism.min.js"
        );
        await loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/components/prism-verilog.min.js"
        );

        if (isMounted.current) {
          initializeCodeFormatter();
        }
      } catch (error) {
        console.error("Failed to load scripts:", error);
      }
    };

    loadScripts();

    // Cleanup function: set isMounted to false when the component is unmounted
    return () => {
      isMounted.current = false;
    };
  }, []);

  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.crossOrigin = "anonymous";
      script.referrerPolicy = "no-referrer";
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  };

  const initializeCodeFormatter = () => {
    // Set the default Verilog code example
    const defaultCode = ` module TrafficLight (
  input clk,
  input reset,
  output reg red,
  output reg yellow,
  output reg green
);

  // Define states
  parameter S_RED = 2'b00;
  parameter S_YELLOW = 2'b01;
  parameter S_GREEN = 2'b10;

  // Define state register
  reg [1:0] state;

  always @(posedge clk or posedge reset) begin
      if (reset) begin
        state <= S_RED; // Initialize state to red
        end else begin
        case (state)
            S_RED: begin
            state <= S_GREEN; // Transition to green after red
            end
            S_YELLOW: begin
            state <= S_RED; // Transition to red after yellow
            end
            S_GREEN: begin
            state <= S_YELLOW; // Transition to yellow after green
            end
            default: begin
            state <= S_RED; // Default condition
            end
        endcase
        end
    end

    // Output logic
    always @(state) begin
        case (state)
        S_RED: begin
            red = 1;
            yellow = 0;
            green = 0;
        end
        S_YELLOW: begin
            red = 0;
            yellow = 1;
            green = 0;
        end
        S_GREEN: begin
            red = 0;
            yellow = 0;
            green = 1;
        end
        default: begin
            red = 0;
            yellow = 0;
            green = 0; // Default condition for safety
        end
        endcase
    end
endmodule
    `;

    // Split the code into lines and add line numbers
    const lines = defaultCode.split("\n");
    const numberedCode = lines
      .slice(0, -1)
      .map((line, index) => `${index + 2}\t${line}`)
      .join("\n");

    // Add a delay before highlighting the default code
    setTimeout(() => {
      const highlightedCode = Prism.highlight(
        numberedCode,
        Prism.languages.verilog,
        "verilog"
      );

      if (isMounted.current) {
        setFormattedCode(highlightedCode);
      }
    }, 4000);
  };

  return (
    <div>
      <pre className="language-verilog spasing">
        <code
          id="formattedCode"
          className="language-verilog"
          dangerouslySetInnerHTML={{ __html: formattedCode }}
        />
      </pre>
    </div>
  );
};

export default ExampleFour;
