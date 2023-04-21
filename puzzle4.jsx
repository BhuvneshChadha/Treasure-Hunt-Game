import React, { useState } from "react";
import "./puzzle4.css";
import { useNavigate } from "react-router-dom";

function KBC() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [result, setResult] = useState("");
  const nav = useNavigate()

  const questions = [
    {
      id: 1,
      question: "What is the capital of India?",
      options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
      answer: "New Delhi",
    },
    {
      id: 2,
      question: "Who is the CEO of Tesla?",
      options: ["Elon Musk", "Bill Gates", "Mark Zuckerberg", "Satya Nadella"],
      answer: "Elon Musk",
    },
    {
      id: 3,
      question: "What is the largest organ in the human body?",
      options: ["Heart", "Liver", "Brain", "Skin"],
      answer: "Skin",
    },
  ];

  const handleAnswerClick = (option) => {
    setShowAnswer(true);
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
      setResult("Correct!");
    }
    else {
      setResult("Wrong!");
    }
    if(score === 3) {
        alert('You won the game');
        nav('/endgame');
    }
     
  };

  const handleNextClick = () => {
    setCurrentQuestion(currentQuestion + 1);
    setShowAnswer(false);
    setResult("");
    
  };

  return (
    <div className="kbc-container">
      <div className="question">{questions[currentQuestion].question}</div>
      <div className="options">
        {questions[currentQuestion].options.map((option) => (
          <div
            key={option}
            className={`option ${showAnswer && option === questions[currentQuestion].answer ? "selected" : ""}`}
            onClick={() => handleAnswerClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
      <div className="answer">{questions[currentQuestion].answer}</div>
      <div className="result">{result}</div>
      {currentQuestion < questions.length - 1 && (
        <button className="next-button" onClick={handleNextClick}>
          Next
        </button>
      )}
      {currentQuestion === questions.length - 1 && (
        <>
        <div className="final-score">Final Score: {score}</div>
        <button onClick={handleAnswerClick}>Next</button>
        </>
      )}
    </div>
  );
}

export default KBC;
