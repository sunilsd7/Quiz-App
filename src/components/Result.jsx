import React from "react";
import { Link } from "react-router-dom";


function Result({ score, total, userResponses }) {
if(score<0 ){
  score=0;
}

  return (
    <div className="text-center p-5 border rounded-lg shadow-md max-w-lg mx-auto bg-amber-200">
      <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
      <p className="text-lg">Your Score: {score} / {total}</p>

      <h3 className="text-xl font-bold mt-6">Review Your Answers:</h3>
      <div className="mt-4 text-left">
        {userResponses.map((response, index ) => (
          <div key={index} className="mb-4 p-3 border rounded-md">
            <p className="font-semibold">
              {index + 1}. {response.question}
            </p>
            <p className={response.isCorrect ? "text-green-500 font-bold text-xl" : "text-red-500 text-xl font-bold"}>
              Your Answer: {response.selectedAnswer}
            </p>
            {!response.isCorrect && (<>
              <p className="text-green-500 font-bold text-xl">Correct Answer: {response.correctAnswer}</p>
              
              </>
            )}
          </div>
        ))}
      </div>
<Link to="/" className="mt-4 bg-blue-500 text-white py-2 px-5 rounded-lg">Restart quiz</Link>
    </div>
  );
}

export default Result;
