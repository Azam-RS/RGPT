import React, { useEffect, useState } from "react";
import "../Prism/prism.css";

const ExampleTwo = () => {
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
    const defaultCode = ` module PWMGenerator_tb;
  reg  clk;
  reg  increase_duty;
  reg  decrease_duty;
  wire pwm;
  PWMGenerator dut (
      .clk(clk),
      .increase_duty(increase_duty),
      .decrease_duty(decrease_duty),
      .pwm(pwm)
  );
  initial begin
    $dumpfile("PWMGenerator_tb.vcd");
    $dumpvars(0, PWMGenerator_tb);
    clk = 0;
    increase_duty = 0;
    decrease_duty = 0;
    #10;
    increase_duty = 1;
    #10;
    increase_duty = 0;
    #140;
    increase_duty = 1;
    #10;
    increase_duty = 0;
    #140;
    increase_duty = 1;
    #10;
    increase_duty = 0;
    #140;
    #10;
    decrease_duty = 1;
    #10;
    decrease_duty = 0;
    #140;
    decrease_duty = 1;
    #10;
    decrease_duty = 0;
    #140;
    decrease_duty = 1;
    #10;
    decrease_duty = 0;
    #140;
    decrease_duty = 1;
    #10;
    decrease_duty = 0;
    #140;
    #100;
    $finish;
  end
  always #5 clk = ~clk;
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
    }, 3000);
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

export default ExampleTwo;
