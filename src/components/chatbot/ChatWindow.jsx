import { useState, useRef, useEffect } from "react";
import { IoClose } from "react-icons/io5";

import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import SuggestedQuestions from "./SuggestedQuestions";
import TypingIndicator from "./TypingIndicator";
import { askCareBot } from "./carebotApi";
import { FiTrash2 } from "react-icons/fi";

const ChatWindow = ({ onClose }) => {
  const defaultMessages = [
    {
      sender: "bot",
      text: "Hi 👋 I'm CareBot. Ask me anything about CareBridge.",
    },
  ];

  const [messages, setMessages] = useState(() => {
    const saved = sessionStorage.getItem("carebot_messages");

    return saved ? JSON.parse(saved) : defaultMessages;
  });

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const bottomRef = useRef();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  useEffect(() => {
    sessionStorage.setItem("carebot_messages", JSON.stringify(messages));
  }, [messages]);

  const sendMessage = async (customMessage = null) => {
    const message = customMessage || input;

    if (!message.trim() || loading) return;

    // User message
    const userMessage = {
      sender: "user",
      text: message,
    };

    // Add user message immediately
    setMessages((prev) => [...prev, userMessage]);

    setInput("");
    setLoading(true);

    try {
      const answer = await askCareBot(message);

      const botMessage = {
        sender: "bot",
        text: answer,
      };

      // Add bot response
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Unable to connect to CareBot. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    sessionStorage.removeItem("carebot_messages");

    setMessages(defaultMessages);
  };

  return (
    <div className="carebot-window shadow-lg">
      <div className="carebot-header">
        <div className="d-flex align-items-center gap-2">
          <div className="bot-avatar">🤖</div>

          <div>
            <h6 className="m-0 fw-bold">CareBridge Assistant</h6>

            <small>Online</small>
          </div>
        </div>

        <button className="close-btn" onClick={onClose}>
          <IoClose size={22} />
        </button>
        <button className="clear-chat-btn" onClick={clearChat}>
          <FiTrash2 size={15} />
          <span>Clear Chat</span>
        </button>
      </div>

      <div className="carebot-body">
        {messages.map((msg, i) => (
          <ChatMessage key={i} sender={msg.sender} text={msg.text} />
        ))}

        {loading && <TypingIndicator />}

        {messages.length === 1 && <SuggestedQuestions onSelect={sendMessage} />}

        <div ref={bottomRef}></div>
      </div>

      <div className="carebot-footer">
        <ChatInput
          value={input}
          setValue={setInput}
          loading={loading}
          onSend={sendMessage}
        />
      </div>
    </div>
  );
};

export default ChatWindow;
