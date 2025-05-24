import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function CopilotTab({ chat }) {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    // You can replace this with actual send logic
    console.log("Question submitted:", question);
    setQuestion(""); // Clear input after submission
  };

  return (
    <div className="flex flex-col h-full justify-between">
      <div className="text-center mt-10">
        <div className="text-2xl font-semibold mb-2">Hi, I'm Fin AI Copilot</div>
        <div className="text-gray-600 mb-4">
          Ask me anything about this conversation.
        </div>
        <div className="text-sm bg-gray-100 px-3 py-2 rounded-full inline-block">
          Suggested: How do I get a refund?
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t flex items-center gap-2">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question..."
          className="flex-1 px-4 py-2 border rounded-full text-sm focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
          title="Send"
        >
          <FaPaperPlane />
        </button>
      </form>
    </div>
  );
}
