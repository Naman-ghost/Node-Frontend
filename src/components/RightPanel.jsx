import CopilotTab from "./CopilotTab";
import DetailsTab from "./DetailsTab";

export default function RightPanel({ activeTab, setActiveTab, selectedChat }) {
  return (
    <div className="bg-white border-l flex flex-col h-full">
      <div className="flex border-b">
        <button
          onClick={() => setActiveTab("copilot")}
          className={`flex-1 py-3 text-center font-semibold border-b-2 ${
            activeTab === "copilot" ? "border-blue-500 text-blue-600" : "border-transparent"
          }`}
        >
          AI Copilot
        </button>
        <button
          onClick={() => setActiveTab("details")}
          className={`flex-1 py-3 text-center font-semibold border-b-2 ${
            activeTab === "details" ? "border-blue-500 text-blue-600" : "border-transparent"
          }`}
        >
          Details
        </button>
      </div>
      <div className="p-4 flex-1 overflow-y-auto">
        {activeTab === "copilot" ? (
          <CopilotTab chat={selectedChat} />
        ) : (
          <DetailsTab chat={selectedChat} />
        )}
      </div>
    </div>
  );
}
