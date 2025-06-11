# AI To-Do List App with CopilotKit

This is a [Next.js](https://nextjs.org/) project that demonstrates how to build an AI-powered to-do list application using the [CopilotKit](https://www.copilotkit.ai/) framework.

This application allows you to manage your tasks and interact with them using natural language, thanks to the in-app AI chatbot powered by CopilotKit.

This project is based on the official CopilotKit tutorial: [Build an AI-Powered To-Do App](https://docs.copilotkit.ai/tutorials/ai-todo-app/overview). It use a sidebar instead of a modal for the chat interface.

## Features

*   **Create, read, and delete tasks:** Standard to-do list functionality.
*   **In-App AI Chatbot:** Interact with your to-do list using natural language. You can ask the AI to add, remove, or check on tasks.
*   **Frontend-Managed State:** The application state is managed on the client-side, with the AI directly interacting with it.
*   **CopilotKit Integration:** Built with `@copilotkit/react-core` for the logic and `@copilotkit/react-ui` for the chat interface.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

*   [Node.js](https://nodejs.org/en/) (version 18 or higher)
*   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation & Setup

1.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

2.  **Set up your environment variables:**
    Create a file named `.env.local` in the root of your project and add your CopilotKit public API key:
    ```
    NEXT_PUBLIC_COPILOT_PUBLIC_API_KEY="YOUR_API_KEY"
    ```
    You can get your API key from the [CopilotKit Cloud](https://cloud.copilotkit.ai/).

### Running the Application

Once the dependencies are installed and the environment variables are set, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about the technologies used in this project, check out the following resources:

*   [CopilotKit Documentation](https://docs.copilotkit.ai/) - learn about CopilotKit features and API.
*   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
*   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

