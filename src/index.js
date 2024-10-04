import React from "react";
import ReactDOM from "react-dom/client";
import Quiz from "./components/Quiz";
import "./index.css";
import { QuizProvider } from "./components/contexts/quiz";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  </React.StrictMode>
);
