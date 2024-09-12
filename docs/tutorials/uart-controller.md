---
sidebar_position: 3
---

# UART Controller

## Overview

A UART (Universal Asynchronous Receiver/Transmitter) interface is a widely used communication interface that enables the exchange of data between a microcontroller, or a microprocessor, and peripheral devices or other systems. It provides a simple and efficient way to transmit and receive data serially, without requiring a clock signal to be shared between devices.

In the context of FPGAs (Field-Programmable Gate Arrays), UART interfaces are commonly used for communication with external devices such as sensors, displays, storage devices, or other embedded systems. They offer a flexible and cost-effective solution for data transmission, as FPGAs can be easily programmed to implement the desired functionality of the UART interface.

The UART interface consists of a transmitter and a receiver. The transmitter converts parallel data into a serial format, which is then transmitted sequentially over a communication line. The receiver performs the reverse process, converting the received serial data back into parallel format for further processing. The communication between the transmitter and the receiver is typically established using two data lines: one for transmitting data (TX) and one for receiving data (RX).

This demonstration shows the process of designing a simple UART controller using RapidGPT.

## Step-by-Step Solution

There are two primary methods for utilizing RapidGPT: as an [advanced HDL autocompletion](../user-guide/rapidgpt-vscode/code-assistant) tool or as a [chat assistant](../user-guide/rapidgpt-vscode/interactive-chat). To use the autocomplete functionality, simply write a comment describing the desired module and press the tab key.

<video controls width="100%">
  <source src="/videos/docs/tutorials/uart-controller/autocomplete_uart_rx_and_tx.mp4"/>
</video>

Autocomplete is very simple and convenient, but the results may need more manual adjustment compared to a result generated from a detailed chat prompt that adheres to the [prompt engineering guidelines](../user-guide/rapidgpt-vscode/prompt-engineering-guidelines). This tutorial was written using results from the chat assistant, but the workflow is very similar between the two methods. To get started with the chat assistant, write a request in the chat window. The chat assistant can generate verilog, answer questions, and explain code, among other things. If the user's prompt does not contain the necessary details to generate an implementation, as below, it will prompt the user for clarification.

<video controls width="100%">
  <source src="/videos/docs/tutorials/uart-controller/initial_prompt_feedback.mp4"/>
</video>

It is always best to provide a detailed prompt that follows the [prompt engineering guidelines](../user-guide/rapidgpt-vscode/prompt-engineering-guidelines). Here is the prompt used in the video below for reference.

```
Generate an RS232 UART controller consisting of 4 modules: 1) a baud rate generator that operates at 9600 baud with three inputs: clk, reset, and sync, and one output: baud_tick. When reset is high, it should reset the baud counter immediately. When sync is high, it should wait half a period and then reset.  2) a uart_transmitter with 5 inputs: clk, baud_tick, reset, enable, and an 8 bit wide data_in bus. It should have 2 outputs, tx, and complete. When enable is high, it should send data on the tx wire at the rate set by the baud_tick input. Data will be transmitted in the following format: 1 start bit, 8 bits of data, no parity bit, and 1 stop bit.  3) a uart_receiver with 5 inputs: clk, baud_tick, reset, enable, and rx. It should have 3 outputs: an 8 bit data_out bus, an rx_ready signal to indicate when data_out is ready for reading, and a sync signal which will be set high for one clk cycle when the start bit is received. 4) a top module with inputs clk, reset, and an 8 bit data_in bus as well as an 8 bit data_out output bus and a single rx_tx wire of type inout. The top module will instantiate the other 3 modules and will manage uart_transmitter and uart_receiver's access to the rx_tx inout wire as follows: By default rx_tx will be an input allowing the receiver to listen for data.  However, if data_in at the top level is not 0 and the complete signal from the uart_transmitter is 0, it will switch to transmit mode until the data in data_in has been sent, and then revert to receiver mode.
```

<video controls width="100%">
  <source src="/videos/docs/tutorials/uart-controller/generate_modules.mp4"/>
</video>

Iteration and manual correction is a normal part of the RapidGPT workflow. In this example, the chat assistant is used to iterate on the baud rate generator design, improving it by making baud rate and clock frequency parameters. Note that the user in the video switches conversation scopes when working on just one module in a larger design. This is important because there is a cap on the number of chat interactions per conversation scope; although it is rare to reach that cap, changing scope when working on individual modules is a best practice.

<video controls width="100%">
  <source src="/videos/docs/tutorials/uart-controller/baud_rate_generator_prompt_debug.mp4"/>
</video>

Because this is a simple example, the baud rate generator is ready to use after a single iteration and no manual changes. More complex components typically require more engagement with the user.

Here is the transmitter module RapidGPT generated based on the prompt above.

<div className="e-holder">
    <button type="button" className="btn-rep rewrite" onClick={() => {     
        reply("uart1");        
        }}>Replay</button>
<div id="uart1">

```verilog showLineNumbers
// UART Transmitter Module (draft created by RapidGPT)
module uart_transmitter (
  input wire clk,
  input wire baud_tick,
  input wire reset,
  input wire enable,
  input wire [7:0] data_in,
  output wire tx,
  output wire complete
);
  reg [3:0] state;
  reg [7:0] data;
  reg start_bit;
  reg [2:0] bit_counter;

  always @(posedge clk or posedge reset) begin
    if (reset)
      state <= 0;
    else if (enable) begin
      case (state)
        0: begin
          if (baud_tick) begin
            start_bit <= 1;
            bit_counter <= 0;
            state <= 1;
          end
        end
        1: begin
          if (baud_tick) begin
            tx <= start_bit;
            start_bit <= 0;
            data <= data_in;
            bit_counter <= 0;
            state <= 2;
          end
        end
        2: begin
          if (baud_tick) begin
            tx <= data[bit_counter];
            bit_counter <= bit_counter + 1;
            if (bit_counter == 7)
              state <= 3;
          end
        end
        3: begin
          if (baud_tick) begin
            tx <= 1;
            bit_counter <= 0;
            state <= 4;
          end
        end
        4: begin
          if (baud_tick) begin
            complete <= 1;
            state <= 0;
          end
        end
      endcase
    end
  end

endmodule
```

</div>
</div>

There are several issues that the designer needs to address. In particular, the value of the start bit is reversed, the outputs should be registered, and the complete bit requires initialization. Additionally, states 3 and 4 can be combined, and it would be beneficial to assign meaningful names to the states for improved readability. Although all of that can be accomplished by iteration using the chat agent, as shown above, when the designer has small, specific changes in mind, it is often more efficient to directly edit the code instead of writing a prompt for each change and potentially iterating further on the new result. Here is the transmitter design with the manual modifications:

<div className="e-holder dontAnimateSnippet">
    <button type="button" className="btn-rep rewrite" onClick={() => {     
        reply("uart2");        
        }}>Replay</button>
<div id="uart2">

```verilog showLineNumbers
// UART Transmitter Module (revised by the user)
module uart_transmitter (
  input wire clk,
  input wire baud_tick,
  input wire reset,
  input wire enable,
  input wire [7:0] data_in,
  output reg tx,
  output reg complete
);
  reg [3:0] state;
  reg [7:0] data;
  reg start_bit;
  reg [2:0] bit_counter;

  // State machine states
  parameter IDLE = 0;
  parameter START_BIT = 1;
  parameter DATA_BITS = 2;
  parameter STOP_BIT = 3;

  always @(posedge clk or posedge reset) begin
    if (reset) begin
      state <= IDLE;
      bit_counter <= 0;
      tx <= 1;
      complete <= 0;
    end else begin
      case (state)
        IDLE:
          if (enable && !complete) begin
            state <= START_BIT;
            bit_counter <= 0;
            data <= data_in;
          end
        START_BIT:
          if (baud_tick) begin
            state <= DATA_BITS;
            bit_counter <= 0;
            tx <= 0;
          end
        DATA_BITS:
          if (baud_tick) begin
            if (bit_counter < 8) begin
              tx <= data[bit_counter];
              bit_counter <= bit_counter + 1;
            end else begin
              state <= STOP_BIT;
              bit_counter <= 0;
              tx <= 1;
            end
          end
        STOP_BIT:
          if (baud_tick) begin
            state <= IDLE;
            bit_counter <= 0;
            tx <= 1;
            complete <= 1;
          end
      endcase
    end
  end

endmodule
```

</div>
</div>

The process is very similar for the receiver module. Here is the receiver module generated with the initial prompt:

<div className="e-holder dontAnimateSnippet">
    <button type="button" className="btn-rep rewrite" onClick={() => {     
        reply("uart3");        
        }}>Replay</button>
<div id="uart3">

```verilog showLineNumbers
// UART Receiver Module (draft created by RapidGPT)
module uart_receiver (
  input wire clk,
  input wire baud_tick,
  input wire reset,
  input wire enable,
  input wire rx,
  output wire [7:0] data_out,
  output wire rx_ready,
  output wire sync
);
  reg [3:0] state;
  reg [7:0] data;
  reg start_bit;
  reg [2:0] bit_counter;

  always @(posedge clk or posedge reset) begin
    if (reset)
      state <= 0;
    else if (enable) begin
      case (state)
        0: begin
          if (baud_tick && rx == 0) begin
            start_bit <= 1;
            bit_counter <= 0;
            state <= 1;
          end
        end
        1: begin
          if (baud_tick) begin
            start_bit <= 0;
            data <= 0;
            bit_counter <= 0;
            state <= 2;
          end
        end
        2: begin
          if (baud_tick) begin
            data[bit_counter] <= rx;
            bit_counter <= bit_counter + 1;
            if (bit_counter == 7)
              state <= 3;
          end
        end
        3: begin
          if (baud_tick) begin
            rx_ready <= 1;
            state <= 0;
          end
        end
      endcase
    end
  end

  assign data_out = data;

endmodule
```

</div>
</div>

This module is very nearly ready to use as generated, but several small changes are still required from the designer. As on the transmit module, states should be named and outputs registered. Handling for the sync signal, which ensures the receiver is reading from the center of each transmitted bit, also needs to be added as it was not included in the original generated output. The always block is also slightly reworked so that the enable signal does not need to remain high while receiving data. As before, these changes are made manually, although any of them could also be addressed using the chat assistant.

<div className="e-holder dontAnimateSnippet">
    <button type="button" className="btn-rep rewrite" onClick={() => {     
        reply("uart4");        
        }}>Replay</button>
<div id="uart4">

```verilog showLineNumbers
// UART Receiver Module  (revised by the user)
module uart_receiver (
  input wire clk,
  input wire baud_tick,
  input wire reset,
  input wire enable,
  input wire rx,
  output reg [7:0] data_out,
  output reg rx_ready,
  output reg sync
);
  reg [3:0] state;
  reg [7:0] data;
  reg [2:0] bit_counter;

  // Constants
  parameter IDLE = 0;
  parameter START = 1;
  parameter DATA = 2;
  parameter STOP = 3;

  always @(posedge clk) begin
    if (reset) begin
      state <= IDLE;
      bit_count <= 4'd0;
      data <= 8'd0;
      rx_ready <= 1'b0;
      sync <= 1'b0;
    end else if (sync == 1) begin
      sync <= 1'b0;
    end
    else begin
      case (state)
        IDLE:
          if (!rx && enable) begin
            state <= START;
            bit_count <= 4'd0;
            data <= 8'd0;
            sync <= 1'd1;
          end
        START:
          if (baud_tick) begin
            state <= DATA;
            bit_count <= 4'd0;
          end
        DATA:
          if (baud_tick) begin
            data <= {data[6:0], rx};
            bit_count <= bit_count + 1;
            if (bit_count == 7) begin
              state <= STOP;
            end
          end
        STOP:
          begin
            if (baud_tick) begin
              data_out <= data;
              rx_ready <= 1'b1;

            if (rx) begin
              state <= IDLE;
            end
            end
          end
      endcase
    end
  end

endmodule
```

</div>
</div>

Last is the top module. Because the designer has made modifications to the other modules, some iteration or manual modification will certainly be needed. Here is the top module as generated by the initial prompt:

<div className="e-holder dontAnimateSnippet">
    <button type="button" className="btn-rep rewrite" onClick={() => {     
        reply("uart5");        
        }}>Replay</button>
<div id="uart5">

```verilog showLineNumbers
// Top Module (draft created by RapidGPT)
module top_module (
  input wire clk,
  input wire reset,
  input wire [7:0] data_in,
  output wire [7:0] data_out,
  inout wire rx_tx
);
  wire baud_tick;
  wire tx;
  wire complete;
  wire [7:0] uart_data_out;
  wire rx_ready;
  wire sync;

  baud_rate_generator baud_gen (
    .clk(clk),
    .reset(reset),
    .sync(sync),
    .baud_tick(baud_tick)
  );

  uart_transmitter uart_tx (
    .clk(clk),
    .baud_tick(baud_tick),
    .reset(reset),
    .enable((data_in != 8'b0) && (complete == 0)),
    .data_in(data_in),
    .tx(tx),
    .complete(complete)
  );

  uart_receiver uart_rx (
    .clk(clk),
    .baud_tick(baud_tick),
    .reset(reset),
    .enable(1),
    .rx(rx_tx),
    .data_out(uart_data_out),
    .rx_ready(rx_ready),
    .sync(sync)
  );

  assign data_out = uart_data_out;

endmodule
```

</div>
</div>

The prompt specified that this design shares a single wire for Rx and Tx at the top level. That was done just to make the example a bit more interesting. The generated code does not handle the inout wire correctly, however, because the prompt was not explicit about the need to use a tristate, and so the designer will need to make some adjustments. There is always some trade off between time spent developing a prompt and time spent tweaking the output from the model; in this case it is simple to fix.

<div className="e-holder dontAnimateSnippet">
    <button type="button" className="btn-rep rewrite" onClick={() => {     
        reply("uart6");        
        }}>Replay</button>
<div id="uart6">

```verilog showLineNumbers
// Top Module (revised by the user)
module top_module (
  input clk,
  input reset,
  input [7:0] data_in,
  output wire [7:0] data_out,
  inout wire rx_tx
);

  reg rx_ready;
  wire tx;
  reg enable;
  wire complete;
  reg rx_drive;
  reg tx_drive;
  wire baud_tick;
  wire sync;

  assign rx_tx = (enable == 1) ? tx_drive : 1'bz;

  baud_rate_generator baud_gen (
    .clk(clk),
    .reset(reset),
    .sync(sync),
    .baud_tick(baud_tick)
  );

  uart_transmitter uart_tx (
    .clk(clk),
    .baud_tick(baud_tick),
    .reset(reset),
    .enable(enable),
    .data_in(data_in),
    .tx(tx),
    .complete(complete)
  );

  uart_receiver uart_rx (
    .clk(clk),
    .baud_tick(baud_tick),
    .reset(reset),
    .enable(~enable),
    .rx(rx_drive),
    .data_out(data_out),
    .rx_ready(rx_ready),
    .sync(sync)
  );

// Control enable signal based on data_in and complete
  always @(posedge clk) begin
    rx_drive <= rx_tx;
    tx_drive <= tx;
    if (reset) begin
      enable <= 0;
    end else begin
      if (data_in != 0 && !complete) begin
        enable <= 1;
      end else begin
        enable <= 0;
      end
    end
  end


endmodule
```

</div>
</div>

By a combination of iteratively improving the design using the chat assistant and making manual changes to the HDL, this example is ready for testing. The chat assistant can save considerable designer time by streamlining the generation of testbenches. Here, the prompt was simply:

```
great; now write me a testbench for the top level module
```

<video controls width="100%">
  <source src="/videos/docs/tutorials/uart-controller/tb_generation_2.mp4"/>
</video>

The testbench generated by RapidGPT was able to be ingested by iverilog without modification, although manual adjustment of the timescale and input values was needed to confirm the module's functionality.

## Conclusions

Because of the nondeterministic nature of the algorithms underlying RapidGPT, new users cannot expect to reproduce exactly the code in this demonstration, even when using the same prompts. However, by following the general workflow presented here, crafting a detailed prompt using the [prompt engineering guidelines](../user-guide/rapidgpt-vscode/prompt-engineering-guidelines), refining the output by iteratively improving the prompt, and making manual changes when appropriate, designers can accelerate their workflow and spend more time solving design problems and less time writing verilog.
