import React, { useState, useEffect } from "react";
import './puzzle.css'
import { useNavigate } from "react-router-dom";

function Puzzle1() {
  const [squares, setSquares] = useState(Array(6).fill(false));
  const [timeLeft, setTimeLeft] = useState(15);
  const navigate = useNavigate()
  let countdown
  useEffect(() => {
     countdown = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(countdown);
      alert("Time's up! You lose.");
      navigate('/login')
    }

    return () => clearInterval(countdown);
  }, [timeLeft]);

  function handleClick(index) {
    const newSquares = squares.slice();
    newSquares[index] = !newSquares[index];
    setSquares(newSquares);

    if (newSquares.every((square) => square)) {
      clearInterval(countdown);
      alert("Great!");
      alert('Time for next puzzle!');
      navigate('/puzzle2')
    }
  }

  return (
    <div>
      <p>Time left: {timeLeft} seconds</p>
      <h1>Turn Fire to Ice</h1>
      <h4>Remove all red</h4>
      <div className="puzzle-grid">
        {squares.map((square, index) => (
          <div
            key={index}
            className={`square ${square ? "blue" : "red"}`}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Puzzle1;
