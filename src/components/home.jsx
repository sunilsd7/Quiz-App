import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-amber-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Let's Test Your General Knowledge! 
        </h1>
        <p className="text-gray-600 mt-3">
          Challenge yourself with some fun and interesting questions!
        </p>

        {/* Start Quiz Button */}
        <div className="mt-6">
          <Link 
            to="/quiz" 
            className="bg-blue-600 text-white text-xl font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Start Quiz 
          </Link>
        </div>

        {/* Rules Section */}
        <div className="mt-8 text-left">
          <h2 className="text-lg font-semibold text-gray-800">Quiz Rules:</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li><span className="font-medium text-green-600">+1</span> point for each correct answer</li>
            <li><span className="font-medium text-red-600">-0.5</span> points for each wrong answer</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
