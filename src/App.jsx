import { useState, useRef } from "react";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import RightPanel from "./components/RightPanel";
import chatsData from "./components/chats";

export default function App() {
  const [selectedChat, setSelectedChat] = useState(chatsData[0]);
  const [activeTab, setActiveTab] = useState("copilot");

  const [sidebarWidth, setSidebarWidth] = useState(288); 
  const [rightPanelWidth, setRightPanelWidth] = useState(384);

  const isResizingLeft = useRef(false);
  const isResizingRight = useRef(false);

  const handleMouseMove = (e) => {
    if (isResizingLeft.current) {
      setSidebarWidth(Math.max(200, e.clientX));
    } else if (isResizingRight.current) {
      setRightPanelWidth(Math.max(240, window.innerWidth - e.clientX));
    }
  };

  const stopResizing = () => {
    isResizingLeft.current = false;
    isResizingRight.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", stopResizing);
  };

  const startResizingLeft = () => {
    isResizingLeft.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", stopResizing);
  };

  const startResizingRight = () => {
    isResizingRight.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", stopResizing);
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <div
        style={{ width: sidebarWidth }}
        className="bg-white border-r overflow-auto"
      >
        <Sidebar
          chats={chatsData}
          onSelect={setSelectedChat}
          selected={selectedChat}
        />
      </div>

      {/* Draggable Divider for Sidebar */}
      <div
        onMouseDown={startResizingLeft}
        className="w-1 cursor-col-resize bg-gray-300 z-10"
      ></div>

      {/* Chat Window */}
      <div className="flex-1 overflow-auto">
        <ChatWindow chat={selectedChat} />
      </div>

      {/* Draggable Divider for RightPanel */}
      <div
        onMouseDown={startResizingRight}
        className="w-1 cursor-col-resize bg-gray-300 z-10"
      ></div>

      {/* Right Panel */}
      <div
        style={{ width: rightPanelWidth }}
        className="bg-white border-l overflow-auto"
      >
        <RightPanel
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          selectedChat={selectedChat}
        />
      </div>
    </div>
  );
}
