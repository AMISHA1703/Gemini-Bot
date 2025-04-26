import { useState } from "react";

const MessageInput = ({ onSend }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex p-4 border-t bg-white dark:bg-gray-800"
    >
      <input
        type="text"
        className="flex-1 rounded-lg p-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-black dark:text-white"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button
        type="submit"
        className="ml-2 px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900"
      >
        Send
      </button>
    </form>
  );
};

export default MessageInput;
