---
sidebar_position: 5
---

# AutoCheck & AutoFix

:::warning Experimental Features Notice

Please note that AutoCheck and AutoFix are currently in their experimental stages. These tools are presently limited to analyzing self-contained modules only. While we endeavor to ensure their effectiveness and reliability, users are advised to use these features with caution and be prepared for potential unpredictability in their functionality.

🛠️ **Continuous Improvement**: Our team is diligently working to enhance this feature. Our aim is to address and reduce these limitations, striving towards a more comprehensive and robust experience in the near future. Your understanding and patience as we refine RapidGPT are greatly appreciated.

:::

## Summary
In the dynamic realm of digital design and simulation, ensuring high-quality code is crucial. AutoCheck and AutoFix are your comprehensive tools in this journey, working in tandem to uphold the integrity and enhance the efficiency of your Verilog code. AutoCheck, powered by robust and open-source EDA tools, conducts thorough syntax checks, while AutoFix, leveraging RapidGPT's advanced AI system, actively corrects identified errors. Together, they streamline your workflow and elevate your coding standards.

## AutoCheck: Your Automated Syntax Auditor

AutoCheck operates as your first line of defense against syntax errors in Verilog coding. It utilizes the powerful iVerilog compilation system to perform comprehensive syntax checks on active Verilog code. This integration ensures a high degree of accuracy and reliability in detecting syntax errors, enabling you to catch and address these discrepancies early in the development cycle.

### Benefits
The integration of iVerilog with AutoCheck offers numerous benefits, including:
- **Precision in Error Detection**: Leverage the proven capabilities of iVerilog for accurate syntax checking.
- **Efficiency in Development**: Quickly identify errors, reducing the time spent in debugging phases.
- **Enhanced Code Quality**: Uphold high standards of code cleanliness, crucial for large-scale and collaborative projects.

## AutoFix: AI-Powered Error Correction

Where AutoCheck identifies syntax issues, AutoFix steps in with the power of RapidGPT's AI system to suggest and automatically implement corrections. This AI-driven approach allows AutoFix to not only rectify common errors but also to adapt and learn from evolving coding patterns and practices. AutoFix's AI algorithms offer practical solutions that align with industry standards, turning syntax errors into opportunities for optimization and learning.

### Benefits
AutoFix, with its AI-driven approach, provides significant advantages:
- **Efficient Error Resolution**: Rapidly implement fixes, streamlining the error correction process.
- **Continuous Improvement of Code Quality**: Aids in maintaining an optimized and clean codebase.
- **Educational Insight**: Offers learning opportunities through AI-suggested best coding practices.

Incorporating AutoCheck and AutoFix into your development workflow with RapidGPT not only boosts your coding efficiency but also ensures your Verilog files meet the highest standards of quality and reliability, backed by the power of iVerilog and advanced AI technology.


## How to Use AutoCheck & AutoFix

To utilize AutoCheck and AutoFix in Visual Studio Code, follow these steps:

1. **Open a Verilog File**: Ensure you have a Verilog file open in the main editor window of Visual Studio Code. AutoCheck and AutoFix are designed to work with Verilog only.

2. **Trigger the Features**: Press `Cmd+Shift+P` on MacOS, or `Crtl+Shift+P` if you are using Windows/Linux, on your keyboard. This command opens the Command Palette in Visual Studio Code.

3. **Run AutoCheck or AutoFix**: In the Command Palette, type and select either 'Run AutoCheck & AutoFix'. The process will then run in the background.

4. **Review Changes**: Once the process is complete, a diff view will be presented. This view highlights the differences between your original code and the amended code after running AutoCheck and AutoFix. Carefully review these changes to understand the modifications or corrections made.

5. **Accept or Reject Changes**: After reviewing, you can choose to accept the changes to update your code or reject them if you prefer to maintain your original code.

Please remember that as these features are experimental, their behavior and effectiveness might vary. We recommend thoroughly reviewing any changes suggested by AutoFix before accepting them.