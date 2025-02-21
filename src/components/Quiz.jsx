import React, { useState } from "react";
import questions from "../data/questions";
import Question from "./Question";
import Result from "./Result";

const shuffleArray = (array) => {

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array;
  
};

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [userResponses, setUserResponses] = useState([]);

  const shuffledQuestions = shuffleArray([...questions]);

  const handleAnswer = (selectedOption) => {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.answer;
    if (selectedOption === shuffledQuestions[currentQuestionIndex].answer) {
      setScore((prevScore) => prevScore + 1);
    } else {
      setScore((prevScore) => prevScore - 0.5);
    }

    setUserResponses((prevResponses) => [
      ...prevResponses,
      {
        question: currentQuestion.question,
        selectedAnswer: selectedOption,
        correctAnswer: currentQuestion.answer,
        isCorrect: isCorrect,
      },
    ]);
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < shuffledQuestions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setGameOver(true);
    }
  };
  const handleSubmit=()=>{
    setGameOver(true);
  }

  return (
    <div className="grid w-100%  mt-10">
      {gameOver ? (
        <Result score={score} total={questions.length} userResponses={userResponses} />
      ) : (
        <>
          <Question
            question={shuffledQuestions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            Sn={currentQuestionIndex+1}
          />
          <button onClick={handleSubmit} className="bg-red-700 text-white w-64  py-4 rounded-2xl"> Result</button>
        </>
      )}
    </div>
  );
}

export default Quiz;
