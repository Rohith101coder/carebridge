const ChatMessage = ({ sender, text }) => {
  return (
    <div
      className={`d-flex mb-3 ${
        sender === "user" ? "justify-content-end" : "justify-content-start"
      }`}
    >
      <div
        className={`chat-message ${
          sender === "user" ? "user-message" : "bot-message"
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default ChatMessage;
