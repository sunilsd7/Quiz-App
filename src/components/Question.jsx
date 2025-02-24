import React, { useState } from "react";

function Question({ question, onAnswer, Sn }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption !== null) {
      onAnswer(selectedOption);
      setSelectedOption(null);
    }
  };

  return (
    <div className="text-center p-6 border rounded-lg shadow-lg max-w-lg mx-auto bg-white">
      <h2 className="text-2xl font-bold text-gray-800">
        <span className="">{Sn}). </span> {question.question}
      </h2>

      <form onSubmit={handleSubmit} className="mt-5">
        {question.options.map((option, index) => (
          <div
            key={index}
            className="mb-3 bg-amber-100 border-2 rounded-lg py-3 px-4 cursor-pointer hover:bg-amber-200 transition duration-300"
          >
            <label className="flex items-center space-x-3 w-full cursor-pointer">
              <input
                type="radio"
                name="answer"
                value={option}
                checked={selectedOption === option}
                onChange={() => setSelectedOption(option)}
                className="text-blue-500 w-5 h-5"
              />
              <span className="text-lg text-gray-700">{option}</span>
            </label>
          </div>
        ))}

        <button
          type="submit"
          disabled={selectedOption === null}
          className="bg-blue-500 w-full py-3 text-white rounded-lg font-semibold mt-4 disabled:bg-gray-400 hover:bg-blue-600 transition duration-300"
        >
          Next Question →
        </button>
      </form>
    </div>
  );
}

export default Question;
