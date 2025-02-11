import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const MarkdownRenderer = ({ data }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      {/* Render the Text Content */}
      <h2 className="text-xl font-bold mb-2">Explanation</h2>
      <ReactMarkdown>{data.text}</ReactMarkdown>

      {/* Render the JavaScript Code with Syntax Highlighting */}
      <h2 className="text-xl font-bold mt-4">Code Implementation</h2>
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {data.code.twoSum.file.contents}
      </SyntaxHighlighter>

      {/* Render Test Cases */}
      <h2 className="text-xl font-bold mt-4">Test Cases</h2>
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {data.code.test.file.contents}
      </SyntaxHighlighter>

      {/* Build & Test Commands */}
      <h2 className="text-xl font-bold mt-4">Build & Test Commands</h2>
      <p>
        <strong>Build Command:</strong> {data.buildCommand.mainItem} {data.buildCommand.commands.join(" ")}
      </p>
      <p>
        <strong>Test Command:</strong> {data.testCommand.mainItem} {data.testCommand.commands.join(" ")}
      </p>
    </div>
  );
};

// Example Usage
const jsonData = {
  "text": "Implementation of Two Sum in JavaScript with detailed explanation...",
  "code": {
    "twoSum": {
      "file": {
        "contents": "const twoSum=(nums, target)=> { ... }"
      }
    },
    "test": {
      "file": {
        "contents": "test('twoSum should return correct indices...', () => {...});"
      }
    }
  },
  "buildCommand": { "mainItem": "npm", "commands": ["install", "jest"] },
  "testCommand": { "mainItem": "npm", "commands": ["test"] }
};

const Chat = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10">
      <MarkdownRenderer data={jsonData} />
    </div>
  );
};

export default Chat;
