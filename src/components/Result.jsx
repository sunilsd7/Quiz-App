import React from "react";
import { Link } from "react-router-dom";

const handleRestart = () => {
  localStorage.removeItem("quizProgress");
};

function Result({ score, total, userResponses }) {

  const finalScore = Math.max(0, score);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200 p-4">
      <div className="bg-white shadow-xl rounded-lg p-6 max-w-lg w-full text-center">
        <h2 className="text-3xl font-bold text-gray-800">🎉 Quiz Completed!</h2>
        <p className="text-lg text-gray-700 mt-2">
          Your Score: <span className="font-bold text-blue-600">{finalScore}</span> / {total}
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mt-6">🕶️ Review Your Answers:</h3>
        <div className="mt-4 text-left space-y-4 max-h-96 overflow-y-auto">
          {userResponses.map((response, index) => (
            <div
              key={index}
              className={`p-4 border rounded-lg shadow-md ${
                response.isCorrect ? "bg-green-100 border-green-400" : "bg-red-100 border-red-400"
              }`}
            >
              <p className="font-semibold text-gray-800">
                {index + 1}. {response.question}
              </p>
              <p
                className={`text-lg font-bold ${
                  response.isCorrect ? "text-green-600" : "text-red-600"
                }`}
              >
                Your Answer: {response.selectedAnswer}
              </p>
              {!response.isCorrect && (
                <p className="text-lg font-bold text-blue-600">✔ Correct Answer: {response.correctAnswer}</p>
              )}
            </div>
          ))}
        </div>

        <Link
          to="/"
          className="mt-6 inline-block bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
          onClick={handleRestart}
        >
          🔄 Restart Quiz
        </Link>
      </div>
    </div>
  );
}

export default Result;
