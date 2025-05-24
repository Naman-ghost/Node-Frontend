import {
  FaPhoneAlt,
  FaClock,
  FaTimes,
  FaStar,
  FaEllipsisH,
  FaBolt,
  FaPaperclip,
  FaSmile,
} from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

export default function ChatWindow({ chat }) {
  const [starred, setStarred] = useState(false);
  const [message, setMessage] = useState("");
  const messageEndRef = useRef(null);

  const handleSend = () => {
    if (message.trim()) {
      console.log("Sending:", message); // Replace with actual send logic
      setMessage("");
    }
  };

  // Scroll to bottom when messages update
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat.messages]);

  return (
    <div className="flex flex-col h-screen bg-white text-sm">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b bg-white">
        <div className="font-medium text-base">{chat.user}</div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setStarred(!starred)}
            className="w-[36px] h-[36px] flex items-center justify-center hover:opacity-80 transition"
          >
            <FaStar className={starred ? "text-black" : "text-gray-400"} />
          </button>
          <button className="h-[36px] flex items-center gap-1 border border-black rounded-md px-2 text-sm hover:bg-gray-100">
            <FaEllipsisH />
          </button>
          <button className="h-[36px] flex items-center gap-1 border border-black rounded-md px-2 text-sm hover:bg-gray-100">
            <FaPhoneAlt />
            <span>Call</span>
          </button>
          <button className="h-[36px] flex items-center gap-1 border border-black rounded-md px-2 text-sm hover:bg-gray-100">
            <FaClock />
            <span>Snooze</span>
          </button>
          <button className="h-[36px] flex items-center gap-1 bg-black text-white rounded-md px-2 text-sm hover:opacity-90">
            <FaTimes />
            <span>Close</span>
          </button>
        </div>
      </div>

      {/* Messages Scrollable Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {chat.messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.sender === "user" ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`max-w-[75%] px-4 py-2 rounded-lg text-sm whitespace-pre-wrap ${
                msg.sender === "user"
                  ? "bg-gray-100 text-left"
                  : "bg-blue-100 text-left"
              }`}
            >
              {msg.text}
              <div className="text-xs text-gray-500 mt-1 text-right">
                {msg.time}
              </div>
            </div>
          </div>
        ))}
        <div ref={messageEndRef} />
      </div>

      {/* Fixed Bottom Input */}
      <div className="border-t bg-white p-4">
        <div className="border rounded-lg p-2">
          <textarea
            rows={2}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Use ⌘K for shortcuts"
            className="w-full resize-none focus:outline-none p-1 text-sm"
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
          />
          <div className="flex items-center justify-between mt-2 px-1">
            <div className="flex items-center gap-3 text-gray-600 text-lg">
              <button className="hover:text-black"><FaBolt /></button>
              <button className="hover:text-black"><FaPaperclip /></button>
              <button className="hover:text-black"><FaSmile /></button>
            </div>
            <button
              onClick={handleSend}
              className="text-sm text-blue-600 font-medium hover:underline"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
