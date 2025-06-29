import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "tailwindcss/tailwind.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { SpriteProvider } from "./context/spriteContext";

ReactDOM.render(
  <React.StrictMode>
    <SpriteProvider>
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </SpriteProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
