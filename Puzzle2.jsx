import { useNavigate } from 'react-router-dom';
import './puzzle2.css'
import React, { useState, useEffect } from "react";

function Puzzle2() {
  const COLORS = ["red", "green", "blue", "yellow"];
  const [sequence, setSequence] = useState([]);
  const [playerSequence, setPlayerSequence] = useState([]);
  const [showingSequence, setShowingSequence] = useState(true);
  const [timeLeft, setTimeLeft] = useState(30);
  const navigate = useNavigate()
  let countdown;
  useEffect(() => {
    countdown = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(countdown);
      alert("Time's up! You lose.");
    }

    return () => clearInterval(countdown);
  }, [timeLeft]);

  useEffect(() => {
    if (!showingSequence && playerSequence.length === sequence.length) {
      if (playerSequence.every((color, index) => color === sequence[index])) {
        clearInterval(countdown);
        alert("You win!");
        alert('Lets play another round');
        navigate('/puzzle3')

      } else {
        alert("Wrong sequence! You lose.");
        navigate('/login ')
      }
    }
  }, [playerSequence, sequence, showingSequence]);

  function handleStart() {
    setSequence([]);
    setPlayerSequence([]);
    setShowingSequence(true);
    setTimeLeft(30);

    let newSequence = [];
    for (let i = 0; i < 5; i++) {
      newSequence.push(COLORS[Math.floor(Math.random() * COLORS.length)]);
    }

    setSequence(newSequence);

    setTimeout(() => {
      setShowingSequence(false);
    }, 2000);
  }

  function handleClick(color) {
    if (showingSequence) {
      return;
    }

    let newPlayerSequence = playerSequence.slice();
    newPlayerSequence.push(color);
    setPlayerSequence(newPlayerSequence);
  }

  return (
    <div>
      <p>Time left: {timeLeft} seconds</p>
      {showingSequence ? (
        <div>
          <p>Remember the sequence:</p>
          <div className="sequence">
            {sequence.map((color, index) => (
              <div key={index} className={`square ${color}`} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p>Repeat the sequence:</p>
          <div className="sequence">
            {COLORS.map((color) => (
              <div
                key={color}
                className={`square ${color}`}
                onClick={() => handleClick(color)}
              />
            ))}
          </div>
        </div>
      )}
      <button onClick={handleStart}>Start</button>
    </div>
  );
}

export default Puzzle2;
