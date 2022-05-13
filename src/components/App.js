import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header";
import GamesList from "./GamesList";
import RockPaperScissors from "./RockPaperScissors/RockPaperScissors";
function App() {
  const gamesList = ["Rock paper scissors"];

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <GamesList list={gamesList} />
            </>
          }
        />
        <Route exact path="/RockPaperScissors" element={<RockPaperScissors/>} />
      </Routes>
    </Router>
  );
}

export default App;
