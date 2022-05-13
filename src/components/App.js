import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MobileDetect from "mobile-detect";

import MobileBox from "./MobileBox";
import Header from "./Header";
import RockPaperScissors from "./RockPaperScissors/RockPaperScissors";

function App() {
  const renderMobileOrDesktop = () => {
    let type = new MobileDetect(window.navigator.userAgent);
    if (type.os === "iOS" || type.os === "AndroidOS") {
      return <MobileBox/>
    }
    return (
      <Router>
      <Routes>
        <Route exact path="/" element={<Header/>} />
      </Routes>
    </Router>
    )
  }
  return (
    renderMobileOrDesktop()
  );
}

export default App;
