---
sidebar_position: 3
---

# Functional Specifications: Data Latching Case Study

Functional specifications provide a detailed description of the desired behavior and functionality of the FPGA design. These specifications outline the inputs, outputs, and expected behavior of the design, as well as any constraints or requirements that need to be met. They typically include the following information:

1. **Design Requirements**: This section describes the overall goals and objectives of the FPGA design. It outlines the specific functionality that the design should provide and any performance requirements that need to be met.

2. **Inputs and Outputs**: This section lists all the inputs and outputs of the design, along with their respective specifications. It includes details such as signal names, data types, bit widths, and any timing requirements.

3. **Functional Description**: This section provides a detailed description of the desired behavior of the design. It explains how the inputs should be processed and how the outputs should be generated based on the specified functionality.

4. **Constraints**: This section includes any constraints or limitations that need to be considered during the design implementation. This may include timing constraints, power constraints, or resource utilization constraints.

5. **Performance Requirements**: This section outlines any specific performance requirements that the design should meet. This may include maximum operating frequency, latency, throughput, or any other relevant performance metrics.

6. **Verification and Validation**: This section describes the methods and techniques that will be used to verify and validate the design against the functional specifications. It may include test plans, simulation strategies, or other verification methodologies.

Functional specifications are crucial for effective communication between the hardware engineer and other stakeholders involved in the FPGA design process. They provide a clear and concise description of the design requirements, ensuring that everyone has a common understanding of the desired functionality.

## Problem Statement

In hardware design, it is crucial to define clear functional specifications for each module to ensure its proper functionality and integration within a larger system. One such module required in our design was a data latching module that would receive a 32-bit bus as input and latch the data at every rising edge of a clock signal. Additionally, there was a requirement to output an 8-bit signal that would latch the byte received by the input at every 100 bytes. However, the initial specifications for the module were incomplete and required further refinement.

## Step-by-Step Solution

### Step 1: Create a new Project

In order to maintain a comprehensive chat history and enable seamless continuation of development, we recommended to **[create a new blank project](/docs/tutorials/your-first-project/your-first-project.md)**.

### Step 2: Introduce the context to RapidGPT

Once the project is created, open the chat panel and write a prompt that outlines the conversation. The image below shows the initial two interactions.

<div>
<div className="chat1" id="chat1">
    <div className="card chat-area-doc">
    <button type="button" className="btn-rep-c rewrite" onClick={() => {     
        chatDoc("chat1");        
        }}>Replay</button>
      <div className="card-body">
        <div className="message">
          <div className="userA cbox">
            <p className="icon-holder">
              <i className="userIcon"> <img src="/img/user.svg" width="14px" height="15px" alt="User" className="userChat" /> User</i>
              <i className="trashIcon"> <img width="14" height="15" src="/img/delete.svg" alt="trash"/> </i>
            </p>
            <p className="animateText">I'd like to elaborate a set of functional specifications for a system. Can you help me with that?</p>
            <p className="datetxt">01/09/2023 00:10:06</p>
          </div>
          <div className="userB cbox">
            <p className="icon-holder">
              <i className="userIcon"><img width="20" height="20" src="/img/robot.svg" alt="user"/>  RapidGPT (4.848 seconds)</i>
              <i className="trashIcon"><img width="14" height="15" src="/img/delete.svg" alt="trash"/></i>
            </p>
            <p className="animateText">Of course! I can assist you in elaborating functional specifications for your system. Please provide me with the necessary details and requirements, and I will help you create the specifications.</p>
            <p className="datetxt">01/09/2023 00:10:11</p>
          </div>
          <div className="userA cbox">
            <p className="icon-holder"><i className="userIcon"><img src="/img/user.svg" width="14px" height="15px" alt="User" className="userChat"/> User</i> <i className="trashIcon"><img width="14" height="15" src="/img/delete.svg" alt="trash"/></i></p>
            <p className="animateText">These are my partial specifications for my module: (1) it takes a 32-bit bus as input that contains data to be latched at every rising edge of a clock signal named "clk", (2) it must have a 8-bit output that latches the byte received by the input at every 100 bytes. What else am I missing?</p>
            <p className="datetxt">01/09/2023 00:18:06</p>
          </div>
          <div className="userB cbox">
            <p className="icon-holder">
              <i className="userIcon"> <img width="20" height="20" src="/img/robot.svg" alt="user"/>  RapidGPT (4.848 seconds) </i>
              <i className="trashIcon"> <img width="14" height="15" src="/img/delete.svg" alt="trash"/> </i>
            </p>
              <p className="animateText">Based on the partial specifications you provided, here are some additional details you may want to consider including in your module's functional specifications:</p>
              <p className="animateText">1. Reset functionality: Specify whether the module should have a reset input signal and define its behavior. For example, you could specify that when the reset signal is asserted, the module should reset its internal state and output.</p>
              <p className="animateText">2. Clock domain crossing: If the input bus is coming from a different clock domain than the "clk" signal, you may need to specify how the module handles the synchronization of the input data.</p>
              <p className="animateText">3. Output behavior: Clarify what the output should do when it is not latching a new byte. Should it hols the previous latched byte or be a defined state?</p>
              <p className="animateText">4. Error handling: Define how the module should handle any errors or invalid input conditions. For example, if the input bus contains invalid data, should the module ignore it or raise an error signal?</p>
              <p className="animateText">5. Timing requirements: Specify any timing constraints or requirements for the module, such as setup and hold items for the input and output signals.</p>
              <p className="animateText">6. Power and area constraints: if there are specific power or area constraints for the module, make sure to include them in the specifications.</p>
              <p className="animateText">Remember to provide clear and concise descriptions for each specification to ensure a complete and accurate understanding  of the module's functionality.</p>
            <p className="datetxt">01/09/2023 00:18:14</p>
          </div>
        </div>
      </div>
    </div>

</div>
</div>

<!-- ![](/img/docs/tutorials/data-latching/interaction-1_700.png) -->

As can be noted, in this case we leverage the first message to set the tone of what we would like RapidGPT to accomplish for us. Then, we detail the partial requirements reported in the [Problem Statement](#problem-statement). In response, RapidGPT demonstrates its capability to understand and elaborate on partial specifications for a hardware module. When presented with incomplete information, it prompts the user to provide additional details and requirements. In this case, RapidGPT requested more information about the module's behavior, specifically regarding the reset functionality, output behavior, handling of invalid data, and any additional specifications related to timing, clock domain crossing, power, and area constraints.

It is worth to underline that RapidGPT provides a clear and concise summary of the important considerations based on the user's input, ensuring that the functional specifications cover all the necessary aspects of the module's behavior.

### Step 3: Interacting with RapidGPT

In the next iteration of our conversation (see image below), we provide feedback on the partial specifications and point out some missing details. We acknowledge the need for a reset signal and specify that when asserted, the module should simply reset its current state. Additionally, we clarify the behavior of the output when the module is not latching, stating that it should hold the previous latched byte. We also mention that the module should ignore incoming invalid data.

<!-- ![](/img/docs/tutorials/data-latching/interaction-2_700.png) -->

<div>
<div className="chat1" id="chat2">
    <div className="card chat-area-doc">
          <button type="button" className="btn-rep-c rewrite" onClick={() => {     
        chatDoc("chat2");        
        }}>Replay</button>
      <div className="card-body">
        <div className="message">
          <div className="userA cbox">
            <p className="icon-holder">
              <i className="userIcon"><img src="/img/user.svg" width="14px" height="15px" alt="User" className="userChat" /> User</i> 
              <i className="trashIcon"><img width="14" height="15" src="/img/delete.svg" alt="trash"/></i>
            </p>
            <p className="animateText">Thanks! Indeed I need to have a reset signal as well. If asserted, the module should simply reset its current state. For the output behavior, when the module is not latching, it should hold the previous latched byte. Finally, for incoming invalid data the module should simply ignore it. For now, let's ignore points 2, 5 and 6 in the list above. Please update the functional specifications.</p>
            <p className="datetxt">01/09/2023 00:29:04</p>
          </div>
          <div className="userB cbox">
            <p className="icon-holder">
              <i className="userIcon"><img width="20" height="20" src="/img/robot.svg" alt="user"/>  RapidGPT (4.848 seconds)</i>
              <i className="trashIcon"><img width="14" height="15" src="/img/delete.svg" alt="trash"/></i>
            </p>
            <p className="animateText">Certainly! Based on the additional information you provided, here is an update version of the functional specifications for your module:</p>
            <div className="doccbox ">
              <pre className="cbox">
                <code>
                  <span className="delaytxt">
                  <p className="btnchat">
                  <img src="/img/btns.png" width="" alt="icon"/>
                  </p>
                  <span className="txt-black">Module Functional Specifications:</span><br />
                    <span className="txt-pink">1. </span>
                    <span className="txt-black">Inputs: </span><br/>
                    <span className="txt-orange"><b>•</b> </span>
                    <span className="txt-black">clk </span>
                    <span className="cmnt">&#40;</span>
                    <span className="txt-pink">1 </span>
                    <span className="txt-orange">- </span>
                    <span className="txt-blue">bit </span>
                    <span className="cmnt">&#41; :</span>
                    <span className="txt-black">Clock Signal </span>
                    <span className="txt-blue">for </span>
                    <span className="txt-black">latching the</span>
                    <span className="txt-blue"> input </span>
                    <span className="txt-black">data. </span><br/>
                    <span className="txt-orange"><b>•</b> </span>
                    <span className="txt-black">reset </span>
                    <span className="cmnt">&#40;</span>
                    <span className="txt-pink">1 </span>
                    <span className="txt-orange">- </span>
                    <span className="txt-blue">bit </span>
                    <span className="cmnt">&#41;:</span>
                    <span className="txt-black">Reset Signal </span>
                    <span className="txt-blue">for </span>
                    <span className="txt-black">resetting the</span>
                    <span className="txt-blue"> module's </span>
                    <span className="txt-black">internal state. </span><br/>
                    <span className="txt-orange"><b>•</b> </span>
                    <span className="txt-black">data_in </span>
                    <span className="cmnt">&#40;</span>
                    <span className="txt-pink">32 </span>
                    <span className="txt-orange">- </span>
                    <span className="txt-blue">bit </span>
                    <span className="cmnt">&#41;:</span>
                    <span className="txt-black">Input </span>
                    <span className="txt-blue">bus </span>
                    <span className="txt-black">containing data to be latched.</span><br/><br/>
                    <span className="txt-pink">2. </span>
                    <span className="txt-black">Outputs: </span><br/>
                    <span className="txt-orange"><b>•</b> </span>
                    <span className="txt-black">data_out </span>
                    <span className="cmnt">&#40;</span>
                    <span className="txt-pink">8 </span>
                    <span className="txt-orange">- </span>
                    <span className="txt-blue">bit</span>
                    <span className="cmnt">&#41;: </span>
                    <span className="txt-black">output signal that latches the </span>
                    <span className="txt-blue">byte </span>
                    <span className="txt-black">received by the </span>
                    <span className="txt-blue">module. </span><br/><br/>
                    <span className="txt-pink">3. </span>
                    <span className="txt-black">Reset Functionality: </span><br/>
                    <span className="txt-orange"><b>•</b> </span>
                    <span className="txt-black">When the reset signal is asserted, the </span>
                    <span className="txt-blue"> modules </span>
                    <span className="txt-black">should reset its internal state.</span><br/><br/>
                    <span className="txt-pink">4. </span>
                    <span className="txt-black">Latching Behavior: </span><br/>
                    <span className="txt-orange"><b>•</b> </span>
                    <span className="txt-black">The </span>
                    <span className="txt-blue">module </span>
                    <span className="txt-black">should latch the </span>
                    <span className="txt-blue">input </span>
                    <span className="txt-black">data at every rising </span>
                    <span className="txt-blue">edge </span>
                    <span className="txt-black">of the clock signal.</span><br/>
                    <span className="txt-orange"><b>•</b> </span>
                    <span className="txt-black">The latching should occur only when </span>
                    <span className="txt-pink">100 </span>
                    <span className="txt-black">bytes have been received since the last latch. </span><br/>
                    <span className="txt-orange"><b>•</b> </span>
                    <span className="txt-black">The latched </span>
                    <span className="txt-blue">byte </span>
                    <span className="txt-black">should be </span>
                    <span className="txt-blue">output </span>
                    <span className="txt-black">on the data_out signal. </span><br/><br/>
                    <span className="txt-pink">5. </span>
                    <span className="txt-black">Invalid Data Handling: </span><br/>
                    <span className="txt-orange"><b>•</b> </span>
                    <span className="txt-black">if the </span>
                    <span className="txt-blue">input</span>
                    <span className="txt-black"> data contains invalid values, the </span>
                    <span className="txt-blue">module </span>
                    <span className="txt-black">should simply ignore it. </span><br/>
                    <span className="txt-orange"><b>•</b> </span>
                    <span className="txt-black">The </span>
                    <span className="txt-blue">module </span>
                    <span className="txt-black">should </span>
                    <span className="txt-blue">continue </span>
                    <span className="txt-black">to count the incoming bytes, regardless of whether the data is valid or invalid. </span><br/><br/>
                    <span className="txt-black">Note: Timing constraints, clock domain crossing, power,  </span>
                    <span className="txt-blue">and </span>
                    <span className="txt-black">area consideration are not covered in this document.  </span><br/><br/>
                  </span>
                </code>
              </pre>
            </div>
            <p className="animateText">Please note that this is a general outline, and you may need to further refine or add more details based on your specific requirements.</p>
            <p className="datetxt">01/09/2023 00:29:13</p>
          </div>
        </div>
      </div>
    </div>
</div>
</div>

In response, RapidGPT provides a first version of the functional specifications that incorporates all the details. It includes the reset functionality, clarifies the output behavior, and adds a section on handling invalid data. Based on this response, we continue by asking RapidGPT to generate a pseudocode for our module (see next image).

<!-- ![](/img/docs/tutorials/data-latching/interaction-3_700.png) -->
<div>
<div className="chat1" id="chat3">
    <div className="card chat-area-doc">
          <button type="button" className="btn-rep-c rewrite" onClick={() => {     
        chatDoc("chat3");        
        }}>Replay</button>
      <div className="card-body">
        <div className="message">
          <div className="userA cbox">
            <p className="icon-holder">
              <i className="userIcon"><img src="/img/user.svg" width="14px" height="15px" alt="User" className="userChat" /> User</i>
              <i className="trashIcon"><img width="14" height="15" src="/img/delete.svg" alt="trash"/></i>
            </p>
            <p className="animateText">Great. Now could please provide me the pseudo-code of my module based on the specifications above?</p>
            <p className="datetxt">01/09/2023 00:34:17</p>
          </div>
          <div className="userB cbox">
            <p className="icon-holder">
              <i className="userIcon"><img width="20" height="20" src="/img/robot.svg" alt="user"/>  RapidGPT (7.839 seconds)</i>
              <i className="trashIcon"><img width="14" height="15" src="/img/delete.svg" alt="trash"/></i>
            </p>
            <p className="animateText">Certainly! Here's the pseudo-code for your module based on the provided specifications:</p>
            <div className="doccbox">
              <pre className="cbox">
                <code>
                  <span className="delaytxt">
                    <p className="btnchat"><img src="/img/btns.png" alt="icon"/></p>
                    <span className="cmnt">// Declare internal state variables</span><br />
                    <span className="txt-black">byte_count </span>
                    <span className="txt-orange">= </span>
                    <span className="txt-pink">0 </span> <br />
                    <span className="txt-black">previous_byte </span>
                    <span className="txt-orange">= </span>
                    <span className="txt-pink">0 </span> <br /><br />
                    <span className="cmnt">//Module behavior</span><br />
                    <span className="txt-orange">always @</span>
                    <span className="cmnt">&#40;</span>
                    <span className="txt-blue">posedge </span>
                    <span className="txt-black"> clk</span>
                    <span className="txt-blue"> or posedge </span>
                    <span className="txt-black">reset</span>
                    <span className="cmnt">&#41; </span>
                    <span className="txt-blue">begin</span> <br />
                    <span className="txt-blue">{"   "}if</span>
                    <span className="cmnt">&#40;</span>
                    <span className="txt-black">reset</span>
                    <span className="cmnt">&#41;</span>
                    <span className="txt-blue"> begin</span> <br />
                    <span className="cmnt">{"     "}//Reset internal State</span><br />
                    <span className="txt-black">{"     "}byte_count </span>
                    <span className="txt-orange"> &#60;= </span>
                    <span className="txt-pink">0 </span> <br />
                    <span className="txt-black">{"     "}previous_byte </span>
                    <span className="txt-orange">&#60;= </span>
                    <span className="txt-pink">0 </span> <br />
                    <span className="txt-blue">{"   "}end else begin</span> <br />
                    <span className="cmnt">{"     "}// Check if 100 bytes have been received</span><br />
                    <span className="txt-blue">{"   "}if</span>
                    <span className="cmnt">&#40;</span>
                    <span className="txt-black">byte_count </span>
                    <span className="txt-orange"> == </span>
                    <span className="txt-pink"> 100</span>
                    <span className="cmnt">&#41;</span>
                    <span className="txt-blue"> begin</span> <br />
                    <span className="cmnt">{"     "} //Latch the input byte</span><br />
                    <span className="txt-black">{"     "} previous_byte </span>
                    <span className="txt-orange">&#60;= </span>
                    <span className="txt-black">data_in</span>
                    <span className="txt-pink">[7:0] </span><br />
                    <span className="txt-black">{"     "} byte_count </span>
                    <span className="txt-orange">&#60;= </span>
                    <span className="txt-pink"> 0 </span><br />
                    <span className="txt-blue">{"   "}end else begin</span> <br />
                    <span className="cmnt">{"     "} //increment byte count</span><br />
                    <span className="txt-black">{"     "} byte_count</span>
                    <span className="txt-orange">&#60;= </span>
                    <span className="txt-black">byte_count </span>
                    <span className="txt-orange"> + </span>
                    <span className="txt-pink"> 1 </span><br />
                    <span className="txt-blue">{"  "}  end </span><br />
                    <span className="txt-blue">{" "} end </span><br />
                    <span className="txt-blue">end </span><br />
                    <span className="cmnt">//Assign the output</span><br />
                    <span className="txt-blue">assign </span>
                    <span className="txt-black">data_out</span>
                    <span className="txt-orange"> = </span>
                   <span className="txt-black">previous_byte </span>
                  </span>
                </code>
              </pre>
            </div>
            <p className="animateText">Please note that this is pseudo-code and note actual Verilog code. It provides a high-level representation of the module's behavior based on the specifications. You will need to convert it to actual Verilog code to use it in your design.</p>
            <p className="datetxt">01/09/2023 00:34:25</p>
          </div>
        </div>
      </div>
    </div>

</div>
</div>

### Step 4: Review and Refine

Based on its previous response, RapidGPT appears to have overlooked a specific aspect of the initial requirements. The provided pseudocode includes an increment operation on the `byte_count` state variable during each clock cycle, which contradicts our request to count 100 bytes. To address this issue, we easily rectify the mistake by bringing it to RapidGPT's attention, as depicted in the following image.

<!-- ![](/img/docs/tutorials/data-latching/interaction-4_700.png) -->
<div>     
<div className="chat1" id="chat4">
    <div className="card chat-area-doc">
          <button type="button" className="btn-rep-c rewrite" onClick={() => {     
        chatDoc("chat4");        
        }}>Replay</button>
      <div className="card-body">
        <div className="message">
          <div className="userA cbox">
            <p className="icon-holder">
              <i className="userIcon"> <img src="/img/user.svg" width="14px" height="15px" alt="User" className="userChat" /> User</i>
              <i className="trashIcon"><img width="14" height="15" src="/img/delete.svg" alt="trash"/></i>
            </p>
            <p className="animateText">Based on the pseudo-code, I believe the byte_counter is not correctly specified. If the input bus is 32 bits, then we have 4 bytes at each clock cycle, not one. What do you think?</p>
            <p className="datetxt">01/09/2023 00:44:10</p>
          </div>
          <div className="userB cbox">
            <p className="icon-holder">
              <i className="userIcon"><img width="20" height="20" src="/img/robot.svg" alt="user"/> RapidGPT (6.598 seconds)</i>
              <i className="trashIcon"><img width="14" height="15" src="/img/delete.svg" alt="trash"/></i>
            </p>
            <p className="animateText">You are correct, I apologize for the oversight. Since the input bus is 32 bits, it represents 4 bytes at each clock cycle. Therefore , the byte counter should be incremented by 4 instead of 1. Here's the corrected version of the pseudo-code:</p>
            <div className="doccbox">
              <pre className="cbox">
                <code>
                  <span className="delaytxt">
                  <p className="btnchat"><img src="/img/btns.png" alt="icon"/></p>
                  <span className="cmnt">// Declare internal state variables</span><br />
                    <span className="txt-black">byte_count </span>
                    <span className="txt-orange">= </span>
                    <span className="txt-pink">0 </span> <br />
                    <span className="txt-black">previous_byte </span>
                    <span className="txt-orange">= </span>
                    <span className="txt-pink">0 </span> <br /><br />
                    <span className="cmnt">//Module behavior</span><br />
                    <span className="txt-orange">always @</span>
                    <span className="cmnt">&#40;</span>
                    <span className="txt-blue">posedge </span>
                    <span className="txt-black"> clk</span>
                    <span className="txt-blue"> or posedge </span>
                    <span className="txt-black">reset</span>
                    <span className="cmnt">&#41; </span>
                    <span className="txt-blue">begin</span> <br />
                    <span className="txt-blue">{"   "}if</span>
                    <span className="cmnt">&#40;</span>
                    <span className="txt-black">reset</span>
                    <span className="cmnt">&#41;</span>
                    <span className="txt-blue"> begin</span> <br />
                    <span className="cmnt">{"     "}//Reset internal State</span><br />
                    <span className="txt-black">{"     "}byte_count </span>
                    <span className="txt-orange"> &#60;= </span>
                    <span className="txt-pink">0 </span> <br />
                    <span className="txt-black">{"     "}previous_byte </span>
                    <span className="txt-orange">&#60;= </span>
                    <span className="txt-pink">0 </span> <br />
                    <span className="txt-blue">{"   "}end else begin</span> <br />
                    <span className="cmnt">{"     "}// Check if 100 bytes have been received</span><br />
                    <span className="txt-blue">{"   "}if</span>
                    <span className="cmnt">&#40;</span>
                    <span className="txt-black">byte_count </span>
                    <span className="txt-orange"> == </span>
                    <span className="txt-pink"> 100</span>
                    <span className="cmnt">&#41;</span>
                    <span className="txt-blue"> begin</span> <br />
                    <span className="cmnt">{"     "} //Latch the input byte</span><br />
                    <span className="txt-black">{"     "} previous_byte </span>
                    <span className="txt-orange">&#60;= </span>
                    <span className="txt-black">data_in</span>
                    <span className="txt-pink">[7:0] </span><br />
                    <span className="txt-black">{"     "} byte_count </span>
                    <span className="txt-orange">&#60;= </span>
                    <span className="txt-pink"> 0 </span><br />
                    <span className="txt-blue">{"   "}end else begin</span> <br />
                    <span className="cmnt">{"     "} //increment byte count by 4</span><br />
                    <span className="txt-black">{"     "} byte_count</span>
                    <span className="txt-orange">&#60;= </span>
                    <span className="txt-black">byte_count </span>
                    <span className="txt-orange"> + </span>
                    <span className="txt-pink"> 4 </span><br />
                    <span className="txt-blue">{"  "}  end </span><br />
                    <span className="txt-blue">{" "} end </span><br />
                    <span className="txt-blue">end </span><br />
                    <span className="cmnt">//Assign the output</span><br />
                    <span className="txt-blue">assign </span>
                    <span className="txt-black">data_out</span>
                    <span className="txt-orange"> = </span>
                   <span className="txt-black">previous_byte </span>
                  </span>
                </code>
              </pre>
            </div>
            <p className="animateText">I apologize for any confusion caused. Please let me know if you have any further questions or if there's anything else I can assist you with!</p>
            <p className="datetxt">01/09/2023 00:44:17</p>
          </div>
        </div>
      </div>
    </div>
</div>
</div>

:::tip Pro Tip

Are you unsatisfied with the style of the pseudocode provided by RapidGPT? You can easily instruct it to rewrite the pseudocode to your liking.

<!-- ![](/img/docs/tutorials/data-latching/pro-tip_700.png) -->
<div>
<div className="chat1" id="chat5">
    <div className="card chat-area-doc">
          <button type="button" className="btn-rep-c rewrite" onClick={() => {     
        chatDoc("chat5");        
        }}>Replay</button>
      <div className="card-body">
        <div className="message">
          <div className="userA cbox">
            <p className="icon-holder">
              <i className="userIcon"><img src="/img/user.svg" width="14px" height="15px" alt="User" className="userChat"/> User</i>
              <i className="trashIcon"><img width="14" height="15" src="/img/delete.svg" alt="trash"/></i>
            </p>
            <p className="animateText">Could you please rewrite the pseud-code in such a way that it doesn't look too similar to Verilog?</p>
            <p className="datetxt">02/09/2023 01:36:38</p>
          </div>
          <div className="userB cbox">
            <p className="icon-holder">
              <i className="userIcon"><img width="20" height="20" src="/img/robot.svg" alt="user"/>  RapidGPT (6.326 seconds)</i>
              <i className="trashIcon"><img width="14" height="15" src="/img/delete.svg" alt="trash"/></i>
            </p>
            <p className="animateText">Certainly! Here's an alternative version of the pseudo-code that is more generic and does't resemble Verilog syntax:</p>
            <div className="doccbox">
              <pre className="cbox">
                <code>
                  <span className="delaytxt">
                  <p className="btnchat">
                  <img src="/img/btns.png" alt="icon"/>
                  </p>
                  <span className="cmnt"> // Declare internal state variables</span><br />
                    <span className="txt-black">byte_count </span>
                    <span className="txt-orange">= </span>
                    <span className="txt-pink">0 </span> <br />
                    <span className="txt-black">previous_byte </span>
                    <span className="txt-orange">= </span>
                    <span className="txt-pink">0 </span> <br /><br />
                    <span className="cmnt">//Module behavior</span><br />
                    <span className="txt-pink">onClockRisingEdge</span>
                    <span className="cmnt">&#40;&#41; </span>
                    <span className="txt-orange">&#123; </span><br/>
                    <span className="txt-blue"> if </span>
                    <span className="cmnt">&#40;</span>
                    <span className="txt-pink">resetSignalIsAsserted</span>
                    <span className="cmnt">&#40;&#41;</span>
                    <span className="cmnt">&#41; </span>
                    <span className="txt-orange">&#123; </span><br/>
                    <span className="cmnt">{"     "}//Reset internal State</span><br />
                    <span className="txt-black">{"     "}byte_count </span>
                    <span className="txt-orange">= </span>
                    <span className="txt-pink">0 </span> <br />
                    <span className="txt-black">{"     "}previous_byte </span>
                    <span className="txt-orange">= </span>
                    <span className="txt-pink">0 </span> <br />
                    <span className="txt-orange"> &#125; </span>
                    <span className="txt-blue"> else </span>
                    <span className="txt-orange"> &#123; </span><br/>
                    <span className="cmnt">{"     "}//Check if 100 bytes have been received</span><br />
                    <span className="txt-blue"> if </span>
                    <span className="cmnt">&#40;</span>
                    <span className="txt-black">byteCount </span>
                    <span className="txt-orange">== </span>
                    <span className="txt-pink">100</span>
                    <span className="cmnt">&#41;</span>
                    <span className="txt-orange"> &#123; </span><br/>
                    <span className="cmnt">{"     "} //Latch the input byte</span><br />
                    <span className="txt-black">{"     "} previous_byte </span>
                    <span className="txt-orange">&#60;= </span>
                    <span className="txt-pink">extractLowerByte </span>
                    <span className="cmnt">&#40; </span>
                    <span className="txt-black">data_in</span>
                    <span className="cmnt">&#41; </span><br/>
                    <span className="txt-black">{"     "} byte_count </span>
                    <span className="txt-orange">= </span>
                    <span className="txt-pink">0 </span> <br />
                    <span className="txt-orange"> &#125; </span>
                    <span className="txt-blue"> else </span>
                    <span className="txt-orange"> &#123; </span><br />
                    <span className="cmnt">{"     "} //increment byte count by 4</span><br />
                    <span className="txt-black">{"     "} byte_count</span>
                    <span className="txt-orange"> = </span>
                    <span className="txt-black">byte_count </span>
                    <span className="txt-orange"> + </span>
                    <span className="txt-pink"> 4 </span><br />
                    <span className="txt-orange"> {"   "} &#125; </span><br />
                    <span className="txt-orange"> {" "} &#125; </span><br />
                    <span className="txt-orange"> &#125; </span><br />
                    <span className="cmnt">//Assign the output</span><br />
                    <span className="txt-black">data_Out</span>
                    <span className="txt-orange"> = </span>
                   <span className="txt-black">previous_Byte </span>
                  </span>
                </code>
              </pre>
            </div>
            <p className="animateText">In this version, I have used more generic syntax and function names to avoid resembling any specific hardware description language like Verilog. This pseudo-code should be easier to understand and can be easily translated into any programming or hardware language of your choice.</p>
            <p className="animateText">Let me know if there's anything else I can assist you with!</p>
            <p className="datetxt">02/09/2023 01:36:38</p>
          </div>
        </div>
      </div>
    </div>
</div>
</div>

:::

Lastly, we also ask RapidGPT to update the specification based on the suggested corrections (see next image).

<!-- ![](/img/docs/tutorials/data-latching/interaction-5_700.png) -->
<div>     
<div className="chat1" id="chat6">
    <div className="card chat-area-doc">
    <button type="button" className="btn-rep-c rewrite" onClick={() => {     
        chatDoc("chat6");        
        }}>Replay</button>
      <div className="card-body">
        <div className="message">
          <div className="userA cbox">
            <p className="icon-holder">
              <i className="userIcon"><img src="/img/user.svg" width="14px" height="15px" alt="User" className="userChat" /> User </i>
              <i className="trashIcon"><img width="14" height="15" src="/img/delete.svg" alt="trash"/></i>
            </p>
            <p className="animateText">I'm satisfied with this for now. I only need you to update the spec to include the counter</p>
            <p className="datetxt">01/09/2023 00:55:07</p>
          </div>
          <div className="userB cbox">
            <p className="icon-holder">
              <i className="userIcon"><img width="20" height="20" src="/img/robot.svg" alt="user"/>  RapidGPT (8.969 seconds)</i>
              <i className="trashIcon"><img width="14" height="15" src="/img/delete.svg" alt="trash"/></i>
            </p>
            <p className="animateText">Certainly! Here's the updated version of the functional specifications, including the byte counter:</p>
            <div className="doccbox">
              <pre>
                <code>
                  <span className="delaytxt">
                  <p className="btnchat">
                  <img src="/img/btns.png" width="" alt="icon"/>
                  </p>
                  <span className="txt-black">Module Functional Specifications:</span><br />
                    <span className="txt-pink">1. </span>
                    <span className="txt-black">Inputs: </span><br/>
                    <span className="txt-orange"><b>•</b> </span>
                    <span className="txt-black">clk </span>
                    <span className="cmnt">&#40;</span>
                    <span className="txt-pink">1 </span>
                    <span className="txt-orange">- </span>
                    <span className="txt-blue">bit</span>
                    <span className="cmnt">&#41; :</span>
                    <span className="txt-black">Clock Signal </span>
                    <span className="txt-blue">for </span>
                    <span className="txt-black">latching the</span>
                    <span className="txt-blue"> input </span>
                    <span className="txt-black">data. </span><br/>
                    <span className="txt-orange"><b>•</b> </span>
                    <span className="txt-black">reset </span>
                    <span className="cmnt">&#40;</span>
                    <span className="txt-pink">1 </span>
                    <span className="txt-orange">- </span>
                    <span className="txt-blue">bit </span>
                    <span className="cmnt">&#41;:</span>
                    <span className="txt-black">Reset Signal </span>
                    <span className="txt-blue">for </span>
                    <span className="txt-black">resetting the</span>
                    <span className="txt-blue"> module's </span>
                    <span className="txt-black">internal state. </span><br/>
                    <span className="txt-orange"><b>•</b> </span>
                    <span className="txt-black">data_in </span>
                    <span className="cmnt">&#40;</span>
                    <span className="txt-pink">32 </span>
                    <span className="txt-orange">- </span>
                    <span className="txt-blue">bit </span>
                    <span className="cmnt">&#41;:</span>
                    <span className="txt-black">Input </span>
                    <span className="txt-blue">bus </span>
                    <span className="txt-black">containing data to be latched.</span><br/><br/>
                    <span className="txt-pink">2. </span>
                    <span className="txt-black">Outputs: </span><br/>
                    <span className="txt-orange"><b>•</b> </span>
                    <span className="txt-black">data_out </span>
                    <span className="cmnt">&#40;</span>
                    <span className="txt-pink">8 </span>
                    <span className="txt-orange">- </span>
                    <span className="txt-blue">bit</span>
                    <span className="cmnt">&#41;: </span>
                    <span className="txt-black">output signal that latches the </span>
                    <span className="txt-blue">byte </span>
                    <span className="txt-black">received by the </span>
                    <span className="txt-blue">module. </span><br/><br/>
                    <span className="txt-pink">3. </span>
                    <span className="txt-black">Internal State: </span><br/>
                    <span className="txt-orange"><b>•</b> </span>
                    <span className="txt-black">byte_count </span>
                    <span className="cmnt">&#40;</span>
                    <span className="txt-blue">integer</span>
                    <span className="cmnt">&#41;: </span>
                    <span className="txt-black">Counter to keep track of the number of bytes received. </span><br/><br/>
                    <span className="txt-pink">4. </span>
                    <span className="txt-black">Reset Functionality: </span><br/>
                    <span className="txt-orange"><b>•</b> </span>
                    <span className="txt-black">When the reset signal is asserted, the </span>
                    <span className="txt-blue"> modules </span>
                    <span className="txt-black">should reset its internal state.</span><br/><br/>
                    <span className="txt-pink">5. </span>
                    <span className="txt-black">Latching Behavior: </span><br/>
                    <span className="txt-orange"><b>•</b> </span>
                    <span className="txt-black">The </span>
                    <span className="txt-blue">module </span>
                    <span className="txt-black">should latch the </span>
                    <span className="txt-blue">input </span>
                    <span className="txt-black">data at every rising </span>
                    <span className="txt-blue">edge </span>
                    <span className="txt-black">of the clock signal.</span><br/>
                    <span className="txt-orange"><b>•</b> </span>
                    <span className="txt-black">The latching should occur only when </span>
                    <span className="txt-pink">100 </span>
                    <span className="txt-black">bytes have been received since the last latch. </span><br/>
                    <span className="txt-orange"><b>•</b> </span>
                    <span className="txt-black">The latched </span>
                    <span className="txt-blue">byte </span>
                    <span className="txt-black">should be </span>
                    <span className="txt-blue">output </span>
                    <span className="txt-black">on the data_out signal. </span><br/><br/>
                    <span className="txt-pink">6. </span>
                    <span className="txt-black">Byte Counting:</span><br/>
                    <span className="txt-orange"><b>•</b> </span>
                    <span className="txt-black">The </span>
                    <span className="txt-blue"> modules </span>
                    <span className="txt-black">should increment the byte_count by </span>
                    <span className="txt-pink">4 </span>
                    <span className="txt-blue"> for </span>
                    <span className="txt-black">every clock cycle. </span><br/><br/>
                    <span className="txt-pink">7. </span>
                    <span className="txt-black">Invalid Data Handling: </span><br/>
                    <span className="txt-orange"><b>•</b> </span>
                    <span className="txt-black">if the </span>
                    <span className="txt-blue">input</span>
                    <span className="txt-black"> data contains invalid values, the </span>
                    <span className="txt-blue">module </span>
                    <span className="txt-black">should simply ignore it. </span><br/>
                    <span className="txt-orange"><b>•</b> </span>
                    <span className="txt-black">The </span>
                    <span className="txt-blue">module </span>
                    <span className="txt-black">should </span>
                    <span className="txt-blue">continue </span>
                    <span className="txt-black">to count the incoming bytes, regardless of whether the data is valid or invalid. </span><br/><br/>
                    <span className="txt-black">Note: Timing constraints, clock domain crossing, power,  </span>
                    <span className="txt-blue">and </span>
                    <span className="txt-black">area consideration are not covered in this document.  </span><br/><br/>
                  </span>
                </code>
              </pre>
            </div>
            <p className="animateText"> Please note that this is a general outline, and you may need to further refine or add more details based on your specific requirements. Let me know if there's anything else I can assist you with!</p>
            <p className="datetxt">01/09/2023 00:55:16</p>
          </div>
        </div>
      </div>
    </div>
</div>
</div>

This iterative process showcases the interactive nature of our conversation where RapidGPT actively listens to our input, incorporates our feedback, and adjusts the specifications accordingly. By doing so, RapidGPT ensures that the specifications accurately reflect the desired behavior of the module and meet our requirements.

## Conclusions

RapidGPT plays a crucial role in assisting hardware engineers in refining their functional specifications. By providing clear and concise descriptions of the desired behavior and functionality of FPGA designs, engineers can effectively communicate their requirements to stakeholders and ensure a common understanding of the desired functionality. RapidGPT's ability to generate code and pseudo-code helps in the implementation process by providing engineers with the necessary tools to translate their specifications into actual hardware designs. By leveraging RapidGPT's capabilities, engineers can streamline the development process, improve collaboration, and ultimately deliver high-quality FPGA designs.
