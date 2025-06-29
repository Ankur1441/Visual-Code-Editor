import React from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";

export default function App() {
  return (
    <div className="bg-purple-900 pt-6 font-sans h-screen">
      <div className="h-full overflow-hidden flex flex-row p-4">
        <div className="flex-1 h-full overflow-hidden flex flex-row bg-white border border-gray-200 rounded-xl mr-2">
          <Sidebar />
          <MidArea />
        </div>
        <div className="w-1/3 h-full overflow-hidden flex flex-col bg-white border border-gray-200 rounded-xl ml-2">
          <PreviewArea />
        </div>
      </div>
    </div>
  );
}
