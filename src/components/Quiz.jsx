  import React, { useState } from "react";
  import questions from "../data/questions";
  import Question from "./Question";
  import Result from "./Result";


  function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [setsubmit]=useState(true);

    const handleAnswer = (selectedOption) => {
      if (selectedOption === questions[currentQuestionIndex].answer) {
        setScore(score + 1);
      }else(
        setScore(score -0.5)
      )
    
      const nextIndex = currentQuestionIndex + 1;
      if (nextIndex < questions.length) {
        setCurrentQuestionIndex(nextIndex);
      } else {
        setGameOver(true);
        setsubmit(false)
      }
    };

    const handleSubmit =(e) =>{
      e.preventDefault();
    
      if(handleSubmit){
      
        setGameOver(true);
        setsubmit(false);
      }
    }

    return (
      <div className="grid w-100 mx-auto items-center mt-10">
        {gameOver ? (
          <Result score={score} total={currentQuestionIndex} />
        ) : (
          <>
          <Question
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
          
          />
          <button onClick={handleSubmit} className="bg-blue-400 rounded-lg py-4">Submit</button>
          

          </>
        )}
          

        
      </div>
    );
  }

  export default Quiz;
