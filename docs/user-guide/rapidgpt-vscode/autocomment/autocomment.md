---
sidebar_position: 4
---

# AutoComment

:::warning Experimental Feature Notice

AutoComment is an experimental feature of RapidGPT and it is currently limited to files that do not exceed 6000 characters. This limitation is estimated and could vary depending on specific user scenarios.

🛠️ **Continuous Improvement**: Our team is working to enhance this feature. Our aim is to address and reduce these limitations. Your understanding and patience as we refine RapidGPT are greatly appreciated.

:::

## Summary

AutoComment automatically adds clear and detailed comments to your Verilog files, making them easier to understand, maintain, and review. It seamlessly integrates into RapidGPT, offering a diff view to track and accept or decline changes and streamline the documentation process for individual files.

**Key Features:**
- **Annotations:** Automatically generates comprehensive comments to clarify complex code sections.
- **Diff view:** Provides a visual comparison between the original and annotated file for easy review.
- **Seamless integration:** Works smoothly within the RapidGPT environment.

**Benefits:**
- Improved code readability and maintainability
- Enhanced collaboration and knowledge sharing
- Reduced time spent on manual documentation
- Streamlined review and approval process

## Get Started with AutoComment

For detailed annotations on a single Verilog file, follow these steps:

### 1. Open a Verilog File
Open a verilog file in VS-Code. For this tutorial, we'll be opening the file "**ram.v**" as created **[Your First Project](/docs/tutorials/your-first-project/your-first-project.md)** tutorial



### 2. Open Command Palette in VS Code:
1. Open the Command Palette with **Cmd+Shift+P** (MacOS) or **Ctrl+Shift+P** (Windows/Linux), then select '**RapidGPT: AutoComment**' to activate the feature, initiating the combined process of syntax checking and automatic error correction. 
2. Alternatively, below the RapidGPT chatbox window, click on "**COMMANDS**" and select "**AutoComment**" from the dropdown menu to use the feature. 

![Open Verilog File](/img/docs/autocomment-images/step2.png)


After clicking on the AutoComment feature, RapidGPT initiates the process of AutoComment indicated on the bottom right corner.

![Open Verilog File](/img/docs/autocomment-images/step3.png)

### 3. Automatic Annotation and Diff View:
After completion, AutoComment presents an annotated file with a diff view for easy review of changes, enhancing readability and facilitating the review process.

![Open Verilog File](/img/docs/autocomment-images/step4.png)

### 4. Review and Approve Changes: 
Review the suggested annotations and integrate them into the code, keeping or undoing changes based on your preference. This process enhances code quality and ensures alignment with your desired specifications.

![Open Verilog File](/img/docs/autocomment-images/step5.png)

 Here is the finalized code after annotation.
 
![Open Verilog File](/img/docs/autocomment-images/step6.png)

AutoComment is designed to streamline the documentation process for individual files, making it easier to maintain and understand complex code.
