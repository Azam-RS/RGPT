import React, { useEffect, useState } from "react";
import "../Prism/prism.css";

const ExampleOne = () => {
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
    const defaultCode = ` module APB_Memory (
  input  wire        clk,
  input  wire        reset,
  input  wire        apb_en,
  input  wire [31:0] apb_addr,
  input  wire [31:0] apb_wdata,
  input  wire [ 3:0] apb_wstrb,
  input  wire        apb_write,
  output wire [31:0] apb_rdata,
  output wire        apb_ready
);
  reg [31:0] memory[0:1023];
  reg [31:0] rdata;
  reg        ready;
  always @(posedge clk or posedge reset) begin
    if (reset) begin
      rdata <= 32'h0;
      ready <= 1'b0;
    end else if (apb_en) begin
      if (apb_write) begin
        if (apb_addr[31:2] < 1024) begin
          if (apb_wstrb[0]) memory[apb_addr[31:2]][7:0] <= apb_wdata[7:0];
          if (apb_wstrb[1]) memory[apb_addr[31:2]][15:8] <= apb_wdata[15:8];
          if (apb_wstrb[2]) memory[apb_addr[31:2]][23:16] <= apb_wdata[23:16];
          if (apb_wstrb[3]) memory[apb_addr[31:2]][31:24] <= apb_wdata[31:24];
        end
      end else begin
        if (apb_addr[31:2] < 1024) begin
          rdata <= {
            memory[apb_addr[31:2]][31:24],
            memory[apb_addr[31:2]][23:16],
            memory[apb_addr[31:2]][15:8],
            memory[apb_addr[31:2]][7:0]
          };
          ready <= 1'b1;
        end
      end
    end
  end
  assign apb_rdata = rdata;
  assign apb_ready = ready;
endmodule
`;

    // Split the code into lines and add line numbers
    const lines = defaultCode.split("\n");
    const numberedCode = lines
      .slice(0, -1)
      .map((line, index = 1) => `${index + 2}\t${line}`)
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

export default ExampleOne;
