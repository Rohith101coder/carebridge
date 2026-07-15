import Linkify from "linkify-react";

const ChatMessage = ({ sender, text }) => {
  console.log(text);
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
        <Linkify>{text}</Linkify>
      </div>
    </div>
  );
};

export default ChatMessage;
