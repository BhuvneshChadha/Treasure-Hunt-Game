import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import Puzzle1 from './components/Puzzle1';
import Puzzle2 from './components/Puzzle2';
import Puzzle3 from './components/puzzle3';
import KBC from './components/puzzle4';
import Endgame from './components/endgame';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} /> 
          <Route path="/puzzle1" element={<Puzzle1 />} />   
          <Route path="/puzzle2" element={<Puzzle2 />} />
          <Route path="/puzzle3" element={<Puzzle3 />} />
          <Route path="/puzzle4" element={<KBC />} />   
          <Route path='/endgame' element={<Endgame />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
