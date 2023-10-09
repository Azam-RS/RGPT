import React from "react";
import Typewriter from "../Typing/typing";

const DelayComponent = () => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 4000);

    return () => clearTimeout(timeout);
  }, [show]);

  if (!show) return null;

  return (
    <pre className="">
      <code className="">
        <Typewriter
          text='<span class="keywords">module </span><span class="plain">state_machine</span> <span class="punctuations">(</span>  
          <span class="keywords">input wire</span> <span class="plain">clk,</span>
          <span class="keywords">input wire</span> <span class="plain">reset,</span>
          <span class="keywords">input wire</span> <span class="plain">start,</span>
          <span class="keywords">output reg</span> <span class="plain">state</span> 
          <span class="punctuations">);</span>
      <span class="keywords">parameter</span> <span class="plain">IDLE</span> <span class="keywords">=</span> <span style="color: rgb(247, 140, 108);">0</span><span class="punctuations">;</span>
      <span class="keywords">parameter</span> <span class="plain">ACTIVE</span> <span class="keywords">=</span><span style="color: rgb(247, 140, 108);"> 1</span><span class="punctuations">;</span>
      
      <span class="plain">always @</span><span class="punctuations">(</span><span class="keywords">posedge</span> <span class="plain">clk </span><span class="keywords">or posedge</span> <span class="plain"><span class="plain">reset</span><span class="punctuations">)</span>
      <span class="keywords">    if </span><span class="punctuations">(</span><span class="plain">reset</span><span class="punctuations">)</span>
      <span class="plain">        state</span> <span class="keywords"><= </span><span class="plain">IDLE</span> <span class="punctuations">;</span> 
              <span class="keywords">   else if</span> <span class="punctuations">(</span><span class="plain">start</span> <span class="punctuations">)</span>
              <span class="plain">       state</span> <span class="keywords"><=</span> <span class="plain">ACTIVE</span> <span class="punctuations">;</span> 
              <span class="keywords">   else</span> 
              <span class="plain">       state</span> <span class="keywords"><=</span>  <span class="plain">state</span><span class="punctuations">;</span>
              <span class="keywords">endmodule</span></span>'
          delay={1}
        />
      </code>
    </pre>
  );
};

export default DelayComponent;
