---
sidebar_position: 7
---

# IP Catalog

:::warning Experimental Feature Notice

🛠️ This IP Catalog feature is currently under active development. The list of IPs provided here may not be exhaustive. Users are encouraged to utilize RapidGPT's chat to request a current list of available IPs or ask for specific IP details. We appreciate your understanding as we work to enhance and expand this feature.

:::

## Summary

The IP Catalog in RapidGPT integrates a curated selection of Digital Signal Processing (DSP) and Math Function IPs from the Xilinx Vivado Repository. This marks a significant initial step in providing hardware engineers and developers with access to pre-verified IP cores. Set to expand and diversify, the catalog currently focuses on foundational capabilities in DSP and Math Function categories.

### Scope of the Current Catalog

Our current catalog targets essential IPs in the DSP and Math Function categories, with an aim to broaden this range in future updates.

## Digital Signal Processing (DSP) IPs

Our selection of DSP IPs include crucial components optimized for both performance and resource efficiency.

### Available DSP IPs:
- **Complex Multiplier** (Category: Building Blocks)
- **Cordic** (Category: Building Blocks)
- **CIC Compiler** (Category: Filter)
- **DUC/DDC Compiler** (Category: Filter)
- **FIR Compiler** (Category: Filter)
- **DDS Compiler** (Category: Modulation)
- **Discrete Fourier Transform** (Category: Transforms)
- **Fast Fourier Transform** (Category: Transforms)
- **Cordic** (Category: Trig Functions)
- **DDS Compiler** (Category: Trig Functions)
- **DDS Compiler** (Category: Waveform Synthesis)

## Math Functions IPs

This section offers fundamental IPs for arithmetic and mathematical operations.

### Available Math Function IPs:
- **Adder/Subtractor** (Category: Adders & Subtractor)
- **CORDIC** (Category: Conversion, CORDIC)
- **Divider Generator** (Category: Divider)
- **Floating Point** (Category: Floating Point)
- **Complex Multiplier** (Category: Multiplier)
- **Multiplier** (Category: Multiplier)

## Enhanced Access to IP Documentation

In addition to the ability to instantiate IPs through [code autocompletion](code-assistant), RapidGPT provides comprehensive, embedded documentation for each IP within its [interactive chat assistant](interactive-chat). This feature allows users to conveniently access detailed information and ask questions about specific IPs directly within the RapidGPT environment. 

### Chat Assistant Features:
- **Instant IP Information**: Ask the chat assistant about any IP in the catalog to receive instant, detailed information.
- **Interactive Queries**: Pose specific questions or request clarification on IP functionalities, configurations, and best practices.
- **Seamless Integration**: Access IP documentation without leaving the RapidGPT platform, ensuring a smooth workflow.

This embedded documentation feature in RapidGPT's chat assistant enhances the user experience by providing easy access to vital information, thereby assisting in informed decision-making and efficient use of the IP Catalog.

## Practical Example: Data Acquisition Module Using Xilinx IPs

In FPGA designs, integrating memory elements and CDC (Clock Domain Crossing) structures is crucial. Xilinx Parameterized Macros (XPMs) offer a versatile way to add these components to projects, enhancing efficiency and customizability. This example demonstrates the use of Xilinx BRAM (Block Random Access Memory) and CDC macros in a data acquisition module to efficiently transfer and store sensor data across different clock domains.

### Utilizing RapidGPT for IP Integration

RapidGPT aids in the seamless instantiation of Xilinx macros and IP cores. Below is an example prompt that illustrates the process of designing and integrating XPMs into RTL designs.
<div className="e-holder">
    <button type="button" className="btn-rep rewrite" onClick={() => {     
        reply("c3");        
        }}>Replay</button>
        
<div id="c3">

```verilog showLineNumbers
/* Design a verilog module name is data_acquisition using Xilinx BRAM macro name is xpm_memory_spram to store 8-bit sensor data. The sensor data is received in one clock domain, and it needs to be stored in the BRAM macro using another clock domain. Utilize a Clock Domain Crossing (CDC) macro name is xpm_cdc_array_single with inputs for the source clock (clk_src), destination clock (clk_dest), and asynchronous reset (rst). The CDC macro should take an 8-bit input (data_in) and provide an 8-bit synchronized output (data_out) to store in BRAM macro. Configure the synchronizer with specific parameters: a destination synchronizer flip-flop of depth 4, no initial synchronization flip-flop, no simulation assertion checks, source input register enabled, and a data width of 8 bits. xpm_memory_spram macro with inputs for write enable (write_enable), clock (clk), and reset (reset). The output of the BRAM macro should be the data read from the RAM (ram_data). This system allows for the secure transfer of sensor data between different clock domains while utilizing Xilinx BRAM for efficient data storage on the based on write enable and input write address */

module data_acquisition (
    input wire       clk_src,   // Source clock domain
    input wire       rst,       // Asynchronous reset
    input wire [7:0] data_in,   // 8-bit sensor data input

    input wire clk_dest,        // Destination clock domain
    input wire write_enable,    // Write enable for BRAM
    input wire [9:0] write_addr,// Write address for BRAM

    output reg [7:0] ram_data   // Data read from BRAM
);

  // Clock Domain Crossing (CDC) Macro
  xpm_cdc_array_single #(
      .DEST_SYNC_FF(4),
      .INIT_SYNC_FF(0),
      .SIM_ASSERT_CHK(0),
      .SRC_INPUT_REG(1),
      .WIDTH(8)
  ) cdc_inst (
      .dest_out(data_out),
      .dest_clk(clk_dest),
      .src_clk(clk_src),
      .src_in(data_in),
      .rst(rst)
  );

  // BRAM Macro
  xpm_memory_spram #(
      .ADDR_WIDTH_A(10),
      .AUTO_SLEEP_TIME(0),
      .ECC_MODE("no_ecc"),
      .MEMORY_INIT_FILE("none"),
      .MEMORY_INIT_PARAM("0"),
      .MEMORY_OPTIMIZATION("true"),
      .MEMORY_PRIMITIVE("auto"),
      .MEMORY_SIZE(1024),
      .MESSAGE_CONTROL(0),
      .READ_DATA_WIDTH_A(8),        // 8-bit data width for BRAM
      .READ_LATENCY_A(1),
      .READ_RESET_VALUE_A("0"),
      .RST_MODE_A("SYNC"),
      .SIM_ASSERT_CHK(0),
      .USE_MEM_INIT(1),
      .WAKEUP_TIME("disable_sleep"),
      .WRITE_DATA_WIDTH_A(8),       // 8-bit data width for BRAM
      .WRITE_MODE_A("no_change")
  ) bram_inst (
      .douta         (ram_data),
      .addra         (write_addr),
      .clka          (clk_dest),
      .dina          (data_out),
      .ena           (write_enable),
      .injectdbiterra(0),           // Error injection disabled
      .injectsbiterra(0),           // Error injection disabled
      .regcea        (1),           // Enable the last register stage
      .rsta          (rst),
      .sleep         (0),           // Sleep signal disabled
      .wea           (write_enable)
  );

endmodule
```

</div>
</div>

### Key Takeaways
- **Ease of Use**: RapidGPT streamlines the instantiation of complex IP cores.
- **Efficiency**: Accelerates the development process with ready-to-use Xilinx IPs.
- **Flexibility**: Offers customization in IP configurations to meet specific design needs.

By employing RapidGPT in FPGA design workflows, hardware engineers can efficiently integrate Xilinx IPs and macros, enhancing the functionality and performance of their designs.