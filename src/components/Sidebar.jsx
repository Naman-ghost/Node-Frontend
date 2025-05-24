import { FiPause, FiList } from "react-icons/fi"; // Adjust based on actual icons needed

export default function Sidebar({ chats, onSelect, selected }) {
  return (
    <div className="bg-white border-r overflow-y-auto h-full flex flex-col">
      {/* Top Section */}
      <div>
        <h2 className="text-xl font-bold p-4 border-b">Your inbox</h2>
        <div className="flex gap-2 px-4 pt-2 pb-1 text-sm text-gray-700">
          <button className="flex items-center gap-1 hover:underline">
            Open <span className="text-xs">▼</span>
          </button>
          <button className="flex items-center gap-1 hover:underline">
            Waiting Longest <span className="text-xs">▼</span>
          </button>
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat, idx) => (
          <div
            key={idx}
            onClick={() => onSelect(chat)}
            className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
              selected.user === chat.user ? "bg-gray-200" : ""
            }`}
          >
            <div className="font-semibold">{chat.user}</div>
            <div className="text-sm text-gray-500 truncate">{chat.preview}</div>
          </div>
        ))}
      </div>

      {/* Bottom Icons */}
      <div className="flex gap-4 p-4 border-t">
        <button className="text-xl hover:text-blue-500">
          <FiPause />
        </button>
        <button className="text-xl hover:text-blue-500">
          <FiList />
        </button>
      </div>
    </div>
  );
}
