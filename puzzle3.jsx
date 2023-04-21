import React, { useState } from "react";
import './puzzle3.css'
import { useNavigate } from "react-router-dom";

function Puzzle3() {
  const [boxes, setBoxes] = useState([
    { color: "Red", name: "Green" },
    { color: "Green", name: "Blue" },
    { color: "Blue", name: "Red" },
  ]);
  const [winningColor, setWinningColor] = useState(
    boxes[Math.floor(Math.random() * boxes.length)].color
  );
  const nav = useNavigate()

  const handleClick = (color) => {
    if (color === winningColor) {
      alert('Woww! Lets move to next one')
      nav('/puzzle4')

    } else {
      alert('Sorry!')
      nav('/login')
    }
  };

  return (
    <div >
      <h1>Color Name Puzzle</h1>
      <p>Click on the {winningColor} color to win.</p>
      <div id="ab" style={{ display: "flex" }}>
        {boxes.map((box) => (
          <div
            key={box.color}
            style={{
              backgroundColor: box.color,
              color: "white",
              padding: "20px",
              margin: "10px",
              cursor: "pointer",
            }}
            onClick={() => handleClick(box.color)}
          >
            {box.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Puzzle3;
