import React, { useState } from "react";
import Sidebar from "../src/components/Sidebar.jsx";
import ChatWindow from "../src/components/Chatwindow.jsx";
import MessageInput from "../src/components/MessageInput.jsx";
// import ThemeToggle from "./components/ToggleTheme.jsx";
// import { ThemeContext, ThemeProvider } from "../src/Context/ThemeContext.jsx";

function App() {
  const [messages, setMessages] = useState([]);
  const [history, setHistory] = useState([]);
  const [loading, setloading] = useState(true);

  const handleSendMessage = async (userMessage) => {
    try{
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
      setloading(true)
    const res = await fetch(`${import.meta.env.VITE_APP_URL}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userMessage }),
    });
    
    const data = await res.json();

    setMessages((prev) => [...prev, { role: "assistant", text: data.reply }]);
    setHistory((prev) => [...prev, userMessage]);
  }catch (error) {
    console.error('Error fetching chat response:', error);
    // (Optional) you can add error message to UI
  } finally {
    setloading(false); // End loading whether success or error
  }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-black dark:text-white">
      {/* Optional Background Blur Layer */}
      <div className=" absolute inset-0 h-full bg-black/30 backdrop-blur-sm z-0 overflow-auto" />

      {/* Main Layout */}
      <div className="relative  flex flex-1 z-10 ">
        {/* Sidebar - Chat History */}
        <div className="w-1/4 p-3 overflow-y-auto ">
          <div className="bg-white/5  backdrop-blur-lg rounded-xl border border-white/10 h-full p-4 sm:overflow-y-auto">
            <Sidebar history={history} />
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex flex-col h-screen  flex-1 p-4">
          {/* Chat Window */}
          <div className="flex-1  overflow-y-auto mb-4">
            <div className="bg-white/5 h-full backdrop-blur-lg rounded-xl border border-white/10 overflow-auto p-4">
              <div className="flex justify-center items-center ">
                <h2 className="text-4xl text-shadow-gray-400">
                  What can I help with?
                </h2>
              </div>
              <ChatWindow messages={messages}  loading={loading}/>
            </div>
          </div>

          {/* Message Input */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-4">
            <MessageInput onSend={handleSendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
