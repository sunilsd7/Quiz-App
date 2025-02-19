import React from "react";
import { Link } from "react-router-dom";

function Result({ score, total }) {
    if(score<0){
        score=0;
    }
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold">Game Over</h2>
      <p className="text-xl mt-4">You scored {score} out of {total}</p>
      <Link to="/" className="mt-5 bg-blue-500 text-white px-6 py-3 rounded-lg inline-block">
        Play Again
      </Link>
    </div>
  );
}

export default Result;
