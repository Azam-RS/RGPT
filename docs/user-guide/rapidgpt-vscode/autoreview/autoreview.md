---
sidebar_position: 6
---

# AutoReview

:::warning Experimental Feature Notice

AutoReview is designed to enhance the quality and efficiency of your Verilog code through an integrated approach of analysis and correction. Currently, AutoReview is in its experimental stage, optimized for self-contained modules. While we strive for effectiveness and reliability, please make sure to check the results.

🛠️ **Continuous Improvement**: Our team is committed to refining this feature, aiming to broaden its capabilities and provide a more robust tool. Your understanding and feedback are valuable as we progress towards these goals.

:::

## Summary
AutoReview offers a unified solution for maintaining code integrity and enhancing coding efficiency. It combines the functionalities of syntax checking and error correction into a single, cohesive tool. Powered by a robust Verilog syntax checker combined with RapidGPT's advanced AI for error correction, AutoReview simplifies your workflow and increases the quality of your code.

### AutoReview: Syntax Checking and Error Correction Unified

AutoReview incorporates the strengths of both syntax checking and AI-driven error correction:

- **Syntax Checking**: Utilizing an advanced Verilog compilation system, AutoReview performs accurate syntax checks to identify errors in your code, acting as a preventive measure against common coding mistakes.
  
- **AI-Powered Error Correction**: Following syntax checks, AutoReview leverages the AI capabilities of RapidGPT to suggest and automatically apply corrections to identified errors, streamlining the error resolution process.

### Benefits
AutoReview offers numerous advantages, making it an indispensable tool for developers working with Verilog:

- **Comprehensive Error Detection and Correction**: Ensures a high level of code accuracy by combining the error detection capabilities of iVerilog with the AI-driven correction mechanisms of RapidGPT.
- **Efficiency Boost**: Reduces the debugging time significantly by automating the error correction process.
- **Continuous Code Improvement**: Helps maintain a clean and optimized codebase, promoting best practices and learning opportunities through AI-suggested fixes.
- **Reliability and Precision**: Leverages proven technology for syntax checking and innovative AI for error correction, offering a reliable and precise tool for developers.

## Get Started with AutoReview

Integrating AutoReview into your development process is straightforward and efficient:

### 1. Open a Verilog File
Open a verilog file in VS-Code. For this tutorial, we'll be opening the file "**ram.v**" as created **[Your First Project](/docs/tutorials/your-first-project/your-first-project.md)** tutorial.

![Open Verilog File](/img/docs/autoreview-images/Step1.png)

### 2. Initiate AutoReview
To initiate AutoReview, perform the following steps:

1. Open the Command Palette with **Cmd+Shift+P** (MacOS) or **Ctrl+Shift+P** (Windows/Linux), then select '**RapidGPT: AutoReview**' to activate the feature, initiating the combined process of syntax checking and automatic error correction. 
2. Alternatively, below the RapidGPT chatbox window, click on "**COMMANDS**" and select "**AutoReview**" from the dropdown menu to use the feature. 

![Alt text](/img/docs/autoreview-images/Step2.png)

After clicking on the AutoReview feature, RapidGPT initiates the process of AutoReview to identify syntax errors and provide AI-driven error correction, indicated on the bottom right corner.

![Alt text](/img/docs/autoreview-images/Step3.png)

### 3. Examine the Changes:
 Upon completion, a diff view will be displayed, showing the differences between the original and the corrected code. This comparison allows for an easy review of the corrections applied by AutoReview.

![Alt text](/img/docs/autoreview-images/Step4.png)

### 4. Revert or Sustain Changes: 
 Incorporate suggested changes into the code, opting to sustain or revert modifications based on preference. 

![Alt text](/img/docs/autoreview-images/Step5.png)

 Here is the finalized code without any syntax errors.
 
![Alt text](/img/docs/autoreview-images/step6.png)

By incorporating AutoReview into your workflow, you can enhance both the efficiency and quality of your Verilog coding projects, backed by the latest advancements in syntax checking and AI-driven error correction.

Please keep in mind that AutoReview is experimental. We recommend a thorough review of any changes it suggests to ensure they meet your coding standards and project requirements.
