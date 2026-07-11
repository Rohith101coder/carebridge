import { IoSend } from "react-icons/io5";

const ChatInput = ({ value, setValue, onSend, loading }) => {
 const handleKeyDown = (e) => {
   if (e.key === "Enter") {
     e.preventDefault();
     onSend();
   }
 };

  return (
    <div className="d-flex align-items-center gap-2">
      <input
        className="form-control"
        placeholder="Ask anything..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={loading}
      />

      <button
        className="btn btn-success rounded-circle send-btn"
        onClick={() => onSend()}
        disabled={loading}
      >
        <IoSend />
      </button>
    </div>
  );
};

export default ChatInput;
