import React from "react";

function Question({ question, onAnswer }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold">{question.question}</h2>
      <div className="flex flex-col mt-5">
        {question.options.map((option, index) => (
          <button
            key={index}
            className="  px-6 py-3 my-2 bg-gray-400 rounded-lg hover:bg-green-500 "
            onClick={() => onAnswer(option)}
          >
            {option }
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
