import React, { useEffect, useState } from "react";
import questions from "../data/questions";
import Question from "./Question";
import Result from "./Result";

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [userResponses, setUserResponses] = useState([]);

 
  useEffect(() => {
    const savedProgress = localStorage.getItem("quizProgress");
    if (savedProgress) {
      try {
        const parsedProgress = JSON.parse(savedProgress);
        setCurrentQuestionIndex(parsedProgress.currentQuestionIndex);
        setScore(parsedProgress.score);
        setGameOver(parsedProgress.gameOver);
        setUserResponses(parsedProgress.userResponses);
      } catch (error) {
        console.error("Error parsing quizProgress from localStorage:", error);
      }
    }
  }, []);



  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledQuestions = shuffleArray([...questions]);

  const handleAnswer = (selectedOption) => {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.answer;
    setScore((prevScore) => (isCorrect ? prevScore + 1 : prevScore - 0.5));

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

  return (
    <div className="grid w-100% mt-10">
      {gameOver ? (
        <Result score={score} total={questions.length} userResponses={userResponses} Sn={currentQuestionIndex+1} />
      ) : (
        <>
          <Question question={shuffledQuestions[currentQuestionIndex]} onAnswer={handleAnswer} />
        </>
      )}
    </div>
  );
}

export default Quiz;

