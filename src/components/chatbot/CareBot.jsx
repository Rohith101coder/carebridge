import { useState } from "react";
import { BsRobot } from "react-icons/bs";
import ChatWindow from "./ChatWindow";
import "./chatbot.css";

const CareBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <ChatWindow isOpen={isOpen} onClose={() => setIsOpen(false)} />
      )}

      <button className="carebot-button" onClick={() => setIsOpen(!isOpen)}>
        <BsRobot size={22} />
        <span>Ask CareBot</span>
      </button>
    </>
  );
};

export default CareBot;
