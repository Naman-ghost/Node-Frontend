import { 
  FaUserEdit, 
  FaLink, 
  FaComments, 
  FaPen, 
  FaPlus, 
  FaUsers 
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export default function DetailsTab({ chat }) {
  return (
    <div className="space-y-6 text-sm">
      {/* Assignee and Team */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="font-medium">Assignee</span>
          <span className="flex items-center gap-2 text-gray-800">
            <FaUserEdit /> {chat.assignee || "Unassigned"}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium">Team</span>
          <span className="flex items-center gap-2 text-gray-800">
            <FaUsers /> {chat.team || "Unassigned"}
          </span>
        </div>
      </div>

      {/* Links Section */}
      <div>
        <h3 className="uppercase text-xs font-bold text-gray-500 mb-2">Links</h3>
        <div className="space-y-2">
          {[
            { label: "Tracker ticket", icon: <FaLink /> },
            { label: "Back-office tickets", icon: <FaLink /> },
            { label: "Side conversations", icon: <FaComments /> },
          ].map((item, idx) => (
            <div key={idx} className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-gray-800">
                {item.icon}
                <span>{item.label}</span>
              </div>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-lg text-gray-600 hover:text-black transition">
                <FaPlus />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Accordion-style Sections */}
      {[
        "User Data",
        "Conversation Attributes",
        "Company Details",
        "Salesforce",
        "Stripe",
        "Jira for Tickets",
      ].map((section, idx) => (
        <div key={idx} className="border-t pt-2">
          <div className="flex justify-between items-center cursor-pointer">
            <h3 className="uppercase text-xs font-bold text-gray-500">{section}</h3>
            <IoIosArrowDown className="text-gray-500 text-xl" />
          </div>
        </div>
      ))}
    </div>
  );
}
