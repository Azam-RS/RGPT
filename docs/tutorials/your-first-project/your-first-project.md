---
sidebar_position: 1
---

# Your First Project

In this tutorial, we will go through the process of creating a simple project using RapidGPT with persistent chat history.

:::danger Important Notice

Please note that RapidGPT has the [incognito mode](../user-guide/rapidgpt-vscode/interactive-chat/incognito) enabled by default when no active workspace is open in VS Code and when no Verilog file is open in the main editor. Chat history is only saved when a Verilog file is open in the active workspace.

:::

## Step 1: Create a New Project
**1.**  Open Visual Studio Code (VS Code).

**2.** Navigate to the top menu and click on "**File**". From the dropdown menu, choose "**Open Folder**".

![Alt text](/img/docs/new-images/Step-1-2.png)

**3.** Select or create a directory for the project, then click "**Select Folder**"

![Alt text](/img/docs/new-images/Step1-3.png)

**4.** Your project folder will now be opened in the VS Code workspace.

![Alt text](/img/docs/new-images/Step1-4.png)

## Step 2: Initialize RapidGPT
**1.** Locate and click on the RapidGPT icon in the VS Code sidebar to open the RapidGPT panel.

![Alt text](/img/docs/new-images/Step-2-1.png)

**2.** The 'CHAT' panel will now be displayed by VS Code.

![Alt text](/img/docs/new-images/Step2-2.png)
**3.** Initiate a conversation with RapidGPT by typing your message in the chat input box.

![Alt text](/img/docs/new-images/Step2-3.png)

**4.** RapidGPT will promptly provide suggestions or code snippets based on your input.

![Alt text](/img/docs/new-images/Step2-4.png)

## Step 3: Persistent Chat History
**1.** To ensure your chat history is automatically saved, begin by creating a Verilog file within the current project.

![Alt text](/img/docs/new-images/Step3-1.png)

**2.** Right-click on the project folder located in the VS Code sidebar. From the context menu, choose "**New File**" and specify a name for the Verilog file. Remember to include the "**.v**" extension, such as "**ram.v**".

![Alt text](/img/docs/new-images/step3-2.png)

**3.** Open the newly generated Verilog file.
![Alt text](/img/docs/new-images/Step3-3.png)

**4.** With this setup, your chat history will be automatically preserved after each interaction.
![Alt text](/img/docs/new-images/Step3-4.png)

# Conclusion
By following this tutorial, you have learned how to create a project using RapidGPT. Remember that the chat history is only saved when a Verilog file is created in the current project. Use the chat panel to interact with RapidGPT, receive code suggestions, and optimize your design. Enjoy the power of RapidGPT and streamline your hardware design process like never before!
