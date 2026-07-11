const questions = [
  "How can I donate?",

  "How do I book a visit?",

  "Register an orphanage",

  "How does CareBridge work?",
];

const SuggestedQuestions = ({ onSelect }) => {
  return (
    <div className="mt-3">
      <small className="text-muted">Suggested Questions</small>

      <div className="mt-2 d-flex flex-wrap gap-2">
        {questions.map((q) => (
          <button
            key={q}
            className="suggestion-chip"
            onClick={() => onSelect(q)}
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestedQuestions;
