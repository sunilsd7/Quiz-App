import React, { useState } from "react";

function Question({ question, onAnswer,Sn }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption !== null) {
      onAnswer(selectedOption); 
      setSelectedOption(null);  
    }
  };

  return (
    <div className="text-center p-5 border rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-2xl font-bold">{Sn}) {question.question}</h2>

      <form onSubmit={handleSubmit} className="mt-5">
        {question.options.map((option, index) => (
          <div key={index} className="mb-2 bg-amber-100 border-2 rounded-lg py-3 hover:bg-gray-300">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="answer"
                value={option}
                checked={selectedOption === option}
                onChange={() => setSelectedOption(option)}
                className="mr-2 text-2xl"
              />
              {option}
            </label>
          </div>
        ))}

        <button
          type="submit"
          disabled={selectedOption === null}
          className="bg-blue-500 w-full py-3 text-white rounded-lg disabled:bg-gray-400"
        >
          Next Question
        </button>
      </form>
    </div>
  );
}

export default Question;
