# 📬 React Chat Admin Panel

A responsive 3-pane chat admin interface built with **React**, **Vite**, and **TailwindCSS**.

## ✨ Features

- Resizable Sidebar and Right Panel  
- Dynamic Chat Selection  
- Central Chat Window  
- Copilot & Details Tabs in Right Panel

---

## 🚀 Getting Started

To run the project locally, first clone the repository, install dependencies, and start the development server. The app will be available at `http://localhost:5173`.

---

## 🧱 Project Structure

The project is organized into the following main components:

- **App.jsx** — The main entry point containing the layout and panel resizing logic.
- **Sidebar.jsx** — Displays a vertical list of chats and manages selection.
- **ChatList.jsx** — Renders individual chat previews inside the sidebar.
- **ChatWindow.jsx** — Shows messages of the currently selected chat.
- **RightPanel.jsx** — Hosts tabbed content with either CopilotTab or DetailsTab visible.
- **CopilotTab.jsx** — A placeholder area to integrate AI or assistant features.
- **DetailsTab.jsx** — Displays conversation metadata such as participants and timestamps.
- **chats.js** — A static file with mock chat data for development and testing.

---

## 🛠 Tech Stack

- **React** — JavaScript UI library  
- **Vite** — Fast build tool and development server  
- **TailwindCSS** — Utility-first CSS framework  

---

## 🎨 Customization Tips

- Update styles using Tailwind utility classes.  
- Extend the `CopilotTab` with API integrations like OpenAI, custom chatbots, etc.  
- Replace static `chats.js` with a backend API to fetch real-time conversations.

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

