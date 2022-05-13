import React from 'react'

import './Header.css'
import Button from './Button'

function Header() {
  return (
    <header>
      <div className="hero">
        <h1>Enjoy free online games.</h1>
        <p>
          Play some of the games that I built from scratch. All you need is to
          relax.
        </p>
      </div>
      <div className="buttons">
        <Button text={"About me"} />
        <Button text={"Suggest a game to build"} secondary={true} />
      </div>
    </header>
  );
}

export default Header