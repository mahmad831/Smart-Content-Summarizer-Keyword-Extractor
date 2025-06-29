# Smart Content Summarizer & Keyword Extractor

This is an intelligent tool that uses the Google Gemini API to provide concise summaries, identify key topics, and extract important keywords from large blocks of text. It's designed as a simple, powerful, and easy-to-use interface for advanced text analysis.

![Smart Content Summarizer Screenshot](https://storage.googleapis.com/genai-web-prod/readme-images/smart-content-summarizer.png)

## ✨ Features

*   **Concise Summarization**: Get the main points of long texts in a single, well-written paragraph.
*   **Keyword Extraction**: Automatically identify and list the 5-10 most important keywords and topics.
*   **Sentiment Analysis**: Instantly determine if the text's sentiment is Positive, Negative, or Neutral.
*   **Text & File Input**: Paste raw text directly or upload `.txt` files.
*   **Responsive UI**: A clean, modern, and responsive user interface built with Tailwind CSS.
*   **Loading & Error States**: Clear feedback during API calls and for handling potential errors.

## 🚀 Technology Stack

*   **Frontend**: [React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **AI/ML**: [Google Gemini API](https://ai.google.dev/) (`@google/genai` SDK)
*   **Module Loading**: ES Modules with `importmap` for a build-less development environment.

## ⚙️ How It Works

The application leverages the power of the Gemini large language model for natural language understanding tasks.

1.  **User Input**: The user pastes text or uploads a `.txt` file into the `InputSection` component.
2.  **API Request**: When the "Analyze Text" button is clicked, the `geminiService` sends the text to the Gemini API (`gemini-2.5-flash-preview-04-17` model).
3.  **Structured Prompting**: The request includes a carefully crafted prompt that instructs the Gemini model to return its analysis in a specific JSON format with three keys: `summary`, `keywords`, and `sentiment`.
4.  **Display Results**: The application receives the structured JSON response, parses it, and displays the information in the `OutputSection` component, separating the summary, keywords, and sentiment into distinct cards for clarity.

## 📂 Project Structure

The project is organized into logical directories and components for maintainability.

```
/
├── components/
│   ├── InputSection.tsx    # Component for text input and actions
│   ├── OutputSection.tsx   # Component to display analysis results
│   └── icons.tsx           # Reusable SVG icon components
├── services/
│   └── geminiService.ts    # Logic for interacting with the Gemini API
├── App.tsx                 # Main application component, manages state
├── index.html              # Main HTML file, includes CDN links and importmap
├── index.tsx               # Root entry point for the React application
├── metadata.json           # Application metadata
├── types.ts                # Shared TypeScript type definitions
└── README.md               # This file
```

## 🔧 Setup and Running

This project is designed to run in an environment where the Gemini API key is securely managed as an environment variable.

### Prerequisites

*   A modern web browser.
*   A valid Google Gemini API key.

### Configuration

The application expects the Gemini API key to be available in `process.env.API_KEY`. This is typically configured in the deployment environment (e.g., Vercel, Netlify, or a custom server).

**You do not need to add the key to the code manually.** The `geminiService.ts` file is already set up to read it from the environment:

```typescript
// services/geminiService.ts
const API_KEY = process.env.API_KEY;
const ai = new GoogleGenAI({ apiKey: API_KEY! });
```

### Running Locally

Since this is a client-side application using CDNs and ES modules, you can run it locally with any simple web server.

1.  **Install a local server** (if you don't have one):
    ```bash
    npm install -g serve
    ```
2.  **Serve the project directory**:
    From the root of the project folder, run:
    ```bash
    serve .
    ```
3.  Open your browser to the URL provided by the server (e.g., `http://localhost:3000`).

**Note**: For the Gemini API to work, you would need to run this in an environment (like a Node.js server or a specific hosting platform) that can securely inject the `API_KEY` environment variable. A simple static file server will not be able to provide this.
