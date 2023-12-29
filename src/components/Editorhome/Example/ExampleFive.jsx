import React, { useEffect, useState } from "react";
import "../Prism/prism.css";

const ExampleFive = () => {
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
    const defaultCode = `module comp_mult #(parameter data_width = 8)(
  input signed [(2*data_width)-1:0] ar,
  input signed [(2*data_width)-1:0] ai,
  input signed [(2*data_width)-1:0] br,
  input signed [(2*data_width)-1:0] bi,
  input wire Clock,
  input wire ClkEn,
  input wire Aclr,
  output wire signed [(2*data_width)-1:0] pr,
  output wire signed [(2*data_width)-1:0] pi
);
    
  reg signed [(2*data_width)-1:0] ar_reg, ai_reg, br_reg, bi_reg;
  reg signed [(4*data_width)-1:0] pr_reg, pi_reg;
    
    always @(posedge Clock or posedge Aclr) begin
    if (Aclr)
        ar_reg <= 0;
    else if (ClkEn)
        ar_reg <= ar;
    end

    always @(posedge Clock or posedge Aclr) begin
    if (Aclr)
        ai_reg <= 0;
    else if (ClkEn)
        ai_reg <= ai;
    end

    always @(posedge Clock or posedge Aclr) begin
    if (Aclr)
        br_reg <= 0;
    else if (ClkEn)
        br_reg <= br;
    end

    always @(posedge Clock or posedge Aclr) begin
    if (Aclr)
        bi_reg <= 0;
    else if (ClkEn)
        bi_reg <= bi;
    end

    always @(posedge Clock or posedge Aclr) begin
    if (Aclr)
        pr_reg <= 0;
    else if (ClkEn)
        pr_reg <= (ar_reg * br_reg) - (ai_reg * bi_reg);
    end

    always @(posedge Clock or posedge Aclr) begin
    if (Aclr)
        pi_reg <= 0;
    else if (ClkEn)
        pi_reg <= (ar_reg * bi_reg) + (ai_reg * br_reg);
    end

    assign pr = pr_reg;
    assign pi = pi_reg;
endmodule // comp_mult
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

export default ExampleFive;
