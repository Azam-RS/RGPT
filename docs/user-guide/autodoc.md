---
sidebar_position: 4
---

# AutoDoc

:::warning Experimental Feature Notice

AutoDoc is an experimental feature of RapidGPT. It's important to be aware of some key limitations at this stage. Firstly, the feature is not capable of processing files that exceed 6000 characters. Additionally, it might encounter difficulties with projects that consist of more than 20 files. These limitations are estimated and could vary depending on specific user scenarios.

🛠️ **Continuous Improvement**: Our team is diligently working to enhance this feature. Our aim is to address and reduce these limitations, striving towards a more comprehensive and robust experience in the near future. Your understanding and patience as we refine RapidGPT are greatly appreciated.

:::

## Summary

AutoDoc redefines documentation for hardware engineers and developers. It offers two tailored modes: a project-based approach for comprehensive documentation of an entire project, and a file-based approach for detailed annotations on individual files. The project-based mode facilitates the creation of a Sphinx-based documentation website, aligning it with the latest code changes. Conversely, the file-based mode enhances individual files, particularly Verilog files, with clarity and detailed annotations.

### Benefits
AutoDoc's dual modes offer various advantages:
- **Time-Saving**: Reduces manual documentation efforts.
- **Accuracy**: Keeps documentation aligned with the codebase.
- **Consistency**: Maintains a uniform documentation style.
- **Flexibility**: Supports both project-wide and file-specific documentation needs.
- **Ease of Use**: Integrates smoothly with the RapidGPT environment.

## How AutoDoc Works

AutoDoc's dual modes cater to diverse documentation requirements:

### Project-Based Mode
This mode creates a Sphinx-based documentation website for an entire project. It involves:
1. **Code Analysis**: Scanning the project's source code.
2. **Documentation Structure**: Organizing content logically.
3. **Content Generation**: Populating the structure with detailed descriptions.
4. **Sphinx Documentation**: Formatting for website deployment.

### File-Based Mode
Focusing on individual files (specifically Verilog files), this mode adds detailed comments and provides a diff view for review. Steps include:
1. **File Analysis**: Examining a specific file.
2. **Annotation**: Adding detailed comments to the file.
3. **Diff View**: Presenting changes for easy comparison and review.

# How to Use AutoDoc

## Project-Based Documentation

To create a full documentation website for your project:

**Steps to Use Project-Based Mode:**
1. **Open Command Palette in VS Code**: Begin by opening the command palette in Visual Studio Code. This can be done by pressing `Ctrl+Shift+P` on Windows/Linux or `Cmd+Shift+P` on MacOS.
2. **Select AutoDoc for Projects**: In the command palette, type and select `AutoDoc -> Generate Project Documentation`. This command initiates the AutoDoc process for your entire project.
3. **Automatic Generation**: AutoDoc will scan your entire project and automatically create a `docs` folder. This folder will contain a Sphinx-based static documentation website, reflecting the current state of your project.
4. **Review and Deploy**: After the process is complete, you can review the generated documentation and make any necessary adjustments before deploying it as a website.

## File-Based Documentation

For detailed annotations on a single Verilog file:

1. **Open Command Palette in VS Code**: Use the command palette as mentioned earlier.
2. **Select AutoDoc for Files**: Search for `AutoDoc -> Annotate Verilog File` and select it to focus on the currently open file.
3. **Automatic Annotation and Diff View**: AutoDoc annotates the file and presents a diff view. This view highlights the differences between the original and the newly annotated version, allowing you to easily identify the changes made.
4. **Review and Approve Changes**: Examine the diff view to understand the annotations. You can approve or modify these changes before saving the file.

By following these steps, you can effectively utilize the AutoDoc feature in RapidGPT to suit your specific documentation requirements, whether for an entire project or a single file.