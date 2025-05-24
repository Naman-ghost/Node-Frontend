const chats = [
  { id: 1, name: "Luis - Github", msg: "Hey! I have a questi...", time: "45m" },
  { id: 2, name: "Ivan - Nike", msg: "Hi there, I have a qu...", time: "3min", unread: true },
  { id: 3, name: "Lead from New York", msg: "Good morning, let me...", time: "30m" },
  { id: 4, name: "Booking API problems", msg: "Bug report", time: "45m" },
  { id: 5, name: "Miracle - Exemplary Bank", msg: "Hey there, I'm here to...", time: "45m" },
];

export default function ChatList() {
  return (
    <div className="overflow-y-auto h-full">
      <div className="p-4 border-b flex items-center justify-between">
        <span className="font-semibold">5 Open</span>
        <span className="text-sm text-gray-500">Waiting longest</span>
      </div>
      {chats.map((chat) => (
        <div
          key={chat.id}
          className={`p-4 border-b hover:bg-gray-100 cursor-pointer ${chat.unread ? "bg-yellow-50" : ""}`}
        >
          <div className="font-medium text-gray-800">{chat.name}</div>
          <div className="text-sm text-gray-600">{chat.msg}</div>
          <div className="text-xs text-gray-400">{chat.time}</div>
        </div>
      ))}
    </div>
  );
}