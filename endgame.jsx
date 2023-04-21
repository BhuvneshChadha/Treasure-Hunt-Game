import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Endgame = () => {
    const [showButton, setShowButton] = useState(false);
    const nav = useNavigate()
    useEffect(() => {
        const timer = setTimeout(() => {
          setShowButton(true);
        }, 10000);
    
        return () => clearTimeout(timer);
      }, []);
      const handleClick = () => {
        alert('YOU HAVE WON THE TREASURE')
        nav('/login')
      };


  return (
    <>
    <h1>CONGRATS! <br /> You have won</h1>
    <h1>Now, Click on next button</h1>
    <h1><a href="">{showButton && <button onClick={handleClick}>Next</button>}</a></h1>
    </>
  )
}

export default Endgame