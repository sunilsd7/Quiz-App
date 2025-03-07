import React, { useEffect, useState } from "react";
import questions from "../data/questions";  
import Question from "./Question";
import Result from "./Result";

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [userResponses, setUserResponses] = useState([]);
  const [shuffledQuestions, setShuffledQuestions] = useState(null);
  const [Sn, SetSn] = useState(0);
  const [loading, setLoading] = useState(true);

  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const savedProgress = localStorage.getItem("quizProgress");

    if (savedProgress) {
      try {
        const parsedProgress = JSON.parse(savedProgress);
        setCurrentQuestionIndex(parsedProgress.currentQuestionIndex || 0);
        setScore(parsedProgress.score || 0);
        setGameOver(parsedProgress.gameOver || false);
        setUserResponses(parsedProgress.userResponses || []);
        SetSn(parsedProgress.Sn || 0);
        setCorrectAnswers(parsedProgress.correctAnswers || 0);
        setIncorrectAnswers(parsedProgress.incorrectAnswers || 0);
      } catch (error) {
        console.error("Error parsing saved progress:", error);
      }
    }

    setShuffledQuestions(shuffleArray([...questions])); 
    setTimeout(() => setLoading(false), 1000); 
  }, []);

  useEffect(() => {

    if (shuffledQuestions) {
      localStorage.setItem(
        "quizProgress",
        JSON.stringify({
          currentQuestionIndex,
          score,
          gameOver,
          userResponses,
         
          correctAnswers,
          incorrectAnswers,
        })
      );
    }
  }, [currentQuestionIndex, score, gameOver, userResponses, shuffledQuestions,  correctAnswers, incorrectAnswers]);

  const handleAnswer = (selectedOption) => {
    if (!shuffledQuestions) return;

    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.answer;

    setScore((prevScore) => Math.max(0, isCorrect ? prevScore + 1 : prevScore - 0.5));

    if (isCorrect) {
      setCorrectAnswers((prevCount) => prevCount + 1);
    } else {
      setIncorrectAnswers((prevCount) => prevCount + 1);
    }

    setUserResponses((prevResponses) => [
      ...prevResponses,
      {
        question: currentQuestion.question,
        selectedAnswer: selectedOption,
        correctAnswer: currentQuestion.answer,
        options: currentQuestion,
        isCorrect,
      },
    ]);

    if (currentQuestionIndex + 1 < shuffledQuestions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setGameOver(true);
    }
  };

  if (loading || shuffledQuestions === null) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 text-lg text-gray-600">
        <div className="animate-spin h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        <p className="mt-3 text-xl font-semibold">Loading questions...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 p-4">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-lg w-full text-center">
        {gameOver ? (
          <Result 
            score={score} 
            total={shuffledQuestions.length} 
            userResponses={userResponses} 
            correctAnswer={correctAnswers} 
            incorrectAnswer={incorrectAnswers} 
          />
        ) : (
          <Question 
            question={shuffledQuestions[currentQuestionIndex]} 
            Sn={currentQuestionIndex + 1} 
            onAnswer={handleAnswer} 
          />
        )}
      </div>
   
    </div>
  );
}

export default Quiz;
