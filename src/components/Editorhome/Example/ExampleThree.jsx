import React, { useEffect, useState } from "react";
import "../Prism/prism.css";

const ExampleThree = () => {
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
    const defaultCode = `module PWMGenerator (
    input  wire clk,
    input  wire increase_duty,
    input  wire decrease_duty,
    output reg  pwm
);
    reg [31:0] counter = 0;
    reg [ 7:0] duty_cycle = 5;
    always @(posedge clk) begin
      if (increase_duty && !decrease_duty) begin
        if (duty_cycle < 9) duty_cycle <= duty_cycle + 1;
        else duty_cycle <= 10;
      end else if (decrease_duty && !increase_duty) begin
        if (duty_cycle > 1) duty_cycle <= duty_cycle - 1;
        else duty_cycle <= 0;
      end
      counter <= counter + 1;
      if (counter >= 9) counter <= 0;
      if (counter < duty_cycle) pwm <= 1'b1;
      else pwm <= 1'b0;
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
    }, 9000);
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

export default ExampleThree;
