---
sidebar_position: 2
---

# Settings

## API Key

The API key setting is used to securely authenticate and authorize access to our API. Create an account on 
[RapidGPT's website](https://getrapidgpt.primis.ai/) and copy-paste [your RapidGPT API key](https://getrapidgpt.primis.ai/dashboard) in this field.

## Precision

Adjusts the AI's precision to suit different preferences. The mood setting ranges from "More Precise" for accuracy-focused outputs, to "Balanced" (the default) for a well-rounded approach, and to "More Creative" for outputs that prioritize creativity and innovation.

## Interactivity Rate

This setting controls how much RapidGPT engages with you in response to your prompts. A higher interactivity rate means that the AI will ask more follow-up questions and provide more detailed responses. A lower interactivity rate means that the AI will be more concise and direct in its responses.

## Message Send Mode
This setting allows you to customize the keystroke used for sending messages in the chat interface. You can choose between two options:

- `Enter` Only: Select this option if you prefer to send messages by pressing the `Enter` key alone. This setting is ideal for users who value speed and efficiency in their interactions.

- `Ctrl`+`Enter`: Choose this option if you want to send messages by pressing the `Ctrl` key along with the `Enter` key. This setting is useful for those who want to avoid accidentally sending incomplete messages and prefer having a confirmation step before sending.

## Response Display Mode
This setting allows you to customize the visual display of RapidGPT's responses in the chat interface. You have two options to choose from:

- Instant Display: Select this option if you prefer to see the entire response from RapidGPT immediately, without any typing effect. This setting is ideal for users who prioritize speed and immediate access to information.

- Gradual Typing: Choose this option to experience a more interactive and realistic chat, where the words in RapidGPT's responses appear sequentially, mimicking the typing effect. This setting enhances the conversational feel and can make the interaction more engaging.

## Remote Server URL

By configuring the Remote Server URL setting, you can specify the URL path and HTTP method for an alternative endpoint. This allows you to define your own API route that corresponds to a specific RapidGPT resource within your organization.

## Chat History Path

Specify an optional path to save the chat history. By default, RapidGPT manages the chat history project-wise. However, using this option allows you to override the default behavior and save the chat history to a specific location. Please note that enabling this option will supersede the project-wise chat history management.

## AutoReview Max Iterations

This setting enables users to define a custom iteration limit within [AutoReview](/docs/user-guide/rapidgpt-vscode/autoreview), effectively reducing the incidence of `429` errors. While increasing the iteration count can enhance the likelihood of RapidGPT finding a solution, it is important to note that execution times may extend proportionally.

## Debug Code

If this code is provided, experimental features will be activated. Empty by default.